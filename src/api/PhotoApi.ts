import config from "../config.json";

class PhotoApi {
  private photoUrl = `${config.URL}/photos/`;
  private photosUrl = `${config.URL}/photos?albumId=`;

  async getPhotos(page: number) {
    const data = await fetch(`${this.photosUrl}${page}`);
    const photo = await data.json();
    return photo;
  }

  async getPhoto(id: number) {
    const data = await fetch(`${this.photoUrl}${id}`);
    const photos = await data.json();
    return photos;
  }
}

const photoApi = new PhotoApi();

export default photoApi;
