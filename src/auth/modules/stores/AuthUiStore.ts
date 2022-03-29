import { makeObservable, observable } from "mobx";
/**
 * This store is for global ui state
 */
class AuthUiStore {
  private rootStore: { authUiStore: AuthUiStore };

  language = "en_US";

  constructor(rootStore: { authUiStore: AuthUiStore }) {
    this.rootStore = rootStore;
    makeObservable(this, {
      language: observable,
    });
  }

  get getLanguage() {
    return this.language;
  }
}

export default AuthUiStore;
