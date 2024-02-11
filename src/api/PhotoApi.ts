const REACT_APP_URL = process.env.REACT_APP_URL;
const API_PORT = process.env.REACT_APP_API_PORT || 4000;
const API_URL =
  REACT_APP_URL ||
  `${window.location.protocol}//${window.location.hostname}:${API_PORT}`;

class PhotoApi {
  private photoUrl = `${API_URL}/photos/`;
  private photosUrl = `${API_URL}/photos?albumId=`;

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
