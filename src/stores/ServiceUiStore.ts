import { makeObservable, observable } from "mobx";
/**
 * This store is for global ui state
 */
class ServiceUiStore {
  private rootStore: { rootStore: ServiceUiStore };

  language = "en_US";

  constructor(rootStore: { rootStore: ServiceUiStore }) {
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
