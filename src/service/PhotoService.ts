export default class PhotoService {
  getImages(src: string) {
    return fetch(src)
      .then((res) => res.json())
      .then((d) => d.data);
  }
}
