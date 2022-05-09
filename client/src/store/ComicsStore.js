import { makeAutoObservable } from 'mobx';

export default class ComicsStore {
  constructor() {
    this._types = [];
    this._genres = [];
    this._comicses = [];
    this._selectedType = {};
    this._selectedGenre = {};
    this._page = 1;
    this._totalCount = 0;
    this._limit = 3;
    this._comicsesCount = 0;
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
    this.setPage(1);
    this._selectedType = type;
  }
  setSelectedGenre(genre) {
    this._selectedGenre = genre;
  }

  setPage(page) {
    this._page = page;
  }
  setTotalCount(count) {
    this._totalCount = count;
  }

  setComicsesCount(count) {
    this._comicsesCount = count;
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
  get totalCount() {
    return this._totalCount;
  }

  get page() {
    return this._page;
  }
  get limit() {
    return this._limit;
  }

  get comicsesCount() {
    return this._comicsesCount;
  }
}
