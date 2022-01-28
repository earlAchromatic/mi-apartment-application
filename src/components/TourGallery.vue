<template>
  <Galleria
    ref="galleria"
    :value="images"
    v-model:activeIndex="activeIndex"
    :numVisible="5"
    containerStyle="max-width: 640px"
    :containerClass="galleriaClass"
    :showThumbnails="showThumbnails"
    :showItemNavigators="true"
    :showItemNavigatorsOnHover="true"
    :circular="true"
    :autoPlay="false"
    :transitionInterval="3000"
  >
    <template #item="slotProps">
      <img
        :src="slotProps.item.itemImageSrc"
        :alt="slotProps.item.alt"
        :style="[
          {
            width: !fullScreen ? '100%' : '100vw',
            display: !fullScreen ? 'block' : '',
            height: !fullScreen ? '20rem' : '100vh',
            'object-fit': !fullScreen ? 'cover' : 'contain',
          },
        ]"
      />
    </template>

    <template #footer>
      <div class="custom-galleria-footer">
        <span v-if="images" class="title-container">
          <span>{{ activeIndex + 1 }}/{{ images.length }}</span>
          <span class="title">{{ images[activeIndex].title }}</span>
        </span>
        <Button
          :icon="fullScreenIcon"
          @click="toggleFullScreen"
          class="fullscreen-button"
        />
      </div>
    </template>
  </Galleria>
</template>

<script>
import Galleria from "primevue/galleria";
import PhotoService from "../service/PhotoService";

export default {
  props: ["photoSrc"],
  data() {
    return {
      images: null,
      activeIndex: 0,
      showThumbnails: false,
      fullScreen: false,
      src: this.photoSrc,
    };
  },
  galleriaService: null,
  created() {
    this.galleriaService = new PhotoService();
  },
  mounted() {
    this.galleriaService
      .getImages(this.src)
      .then((data) => (this.images = data));
    this.bindDocumentListeners();
  },
  methods: {
    onThumbnailButtonClick() {
      this.showThumbnails = !this.showThumbnails;
    },
    toggleFullScreen() {
      if (this.fullScreen) {
        this.closeFullScreen();
      } else {
        this.openFullScreen();
      }
    },
    onFullScreenChange() {
      this.fullScreen = !this.fullScreen;
    },
    openFullScreen() {
      let elem = this.$refs.galleria.$el;
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        /* Firefox */
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        /* IE/Edge */
        elem.msRequestFullscreen();
      }
    },
    closeFullScreen() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    },
    bindDocumentListeners() {
      document.addEventListener("fullscreenchange", this.onFullScreenChange);
      document.addEventListener("mozfullscreenchange", this.onFullScreenChange);
      document.addEventListener(
        "webkitfullscreenchange",
        this.onFullScreenChange
      );
      document.addEventListener("msfullscreenchange", this.onFullScreenChange);
    },
    unbindDocumentListeners() {
      document.removeEventListener("fullscreenchange", this.onFullScreenChange);
      document.removeEventListener(
        "mozfullscreenchange",
        this.onFullScreenChange
      );
      document.removeEventListener(
        "webkitfullscreenchange",
        this.onFullScreenChange
      );
      document.removeEventListener(
        "msfullscreenchange",
        this.onFullScreenChange
      );
    },
  },
  computed: {
    galleriaClass() {
      return ["custom-galleria", { fullscreen: this.fullScreen }];
    },
    fullScreenIcon() {
      return `pi ${
        this.fullScreen ? "pi-window-minimize" : "pi-window-maximize"
      }`;
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep(.custom-galleria) {
  &.fullscreen {
    display: flex;
    flex-direction: column;
    .p-galleria-content {
      flex-grow: 1;
      justify-content: center;
    }
  }
  .p-galleria-content {
    position: relative;
  }
  .p-galleria-thumbnail-wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  .p-galleria-thumbnail-items-container {
    width: 100%;
  }
  .custom-galleria-footer {
    display: flex;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.9);
    color: #ffffff;
    > button {
      background-color: transparent;
      color: #ffffff;
      border: 0 none;
      border-radius: 0;
      margin: 0.2rem 0;
      &.fullscreen-button {
        margin-left: auto;
      }
      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }
    }
  }
  .title-container {
    > span {
      font-size: 0.9rem;
      padding-left: 0.829rem;
      &.title {
        font-weight: bold;
      }
    }
  }
}
img {
  object-fit: contain;
}
.custom-galleria-footer {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  border-bottom: 1px solid rgb(185, 185, 185);
  color: rgb(117, 117, 117);
  .title-container {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 0 1rem;
    align-items: center;
  }
}
</style>
