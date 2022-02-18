import { makeObservable, observable } from "mobx";
/**
 * This store is for global ui state
 */
class ServiceUiStore {
  rootStore;

  language = "en_US";

  constructor(rootStore) {
    this.rootStore = rootStore;
    makeObservable(this, {
      language: observable,
    });
  }

  get getLanguage() {
    return this.language;
  }
}

export default ServiceUiStore;
