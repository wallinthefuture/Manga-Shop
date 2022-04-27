import { makeAutoObservable } from 'mobx';

export default class ComicsStore {
  constructor() {
    this._types = [];
    this._genres = [];
    this._comicses = [];
    this._selectedType = {} || true;
    this._selectedGenre = {};
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }
  setGenres(genres) {
    this._genres = genres;
  }
  setComicses(comics) {
    this._comicses = comics;
  }
  setSelectedType(type) {
    this._selectedType = type;
  }
  setSelectedGenre(genre) {
    this._selectedGenre = genre;
  }

  get types() {
    return this._types;
  }
  get genres() {
    return this._genres;
  }
  get comicses() {
    return this._comicses;
  }

  get selectedType() {
    return this._selectedType;
  }

  get selectedGenre() {
    return this._selectedGenre;
  }
}
