import { makeAutoObservable } from 'mobx';

export default class UserStore {
  constructor() {
    this._isAuth = false;
    this._role = false;
    this._user = {};
    makeAutoObservable(this);
  }

  setIsAuth(bool) {
    this._isAuth = bool;
  }

  setUser(user) {
    this._user = user;
  }

  setRole(bool) {
    this._role = bool;
  }

  get isAuth() {
    return this._isAuth;
  }
  get userInfo() {
    return this._user;
  }
  get role() {
    return this._role;
  }

  get comicsesCount() {
    return this._comicsesCount;
  }
}
