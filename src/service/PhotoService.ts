export default class PhotoService {
  getImages(src) {
    return fetch(src)
      .then((res) => res.json())
      .then((d) => d.data);
  }
}
