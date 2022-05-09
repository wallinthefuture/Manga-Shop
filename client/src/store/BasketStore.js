import { makeAutoObservable } from 'mobx';

export default class BasketStore {
  constructor() {
    this._totalCost = 0;
    this._comicses = [];
    this._comicsesCount = 0;

    makeAutoObservable(this);
  }

  setComicses(comics) {
    this._comicses = comics;
  }
  setTotalCost(cost) {
    this._totalCost = cost;
  }
  setComicsesCount(count) {
    this._comicsesCount = count;
  }
  get comicses() {
    return this._comicses;
  }

  get totalCost() {
    return this._totalCost;
  }
  get comicsesCount() {
    return this._comicsesCount;
  }
}
