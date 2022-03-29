import { makeObservable, observable } from "mobx";
/**
 * This store is for global ui state
 */
class MapUiStore {
  private rootStore: { mapUiStore: MapUiStore };

  language = "en_US";

  constructor(rootStore: { mapUiStore: MapUiStore }) {
    this.rootStore = rootStore;
    makeObservable(this, {
      language: observable,
    });
  }

  get getLanguage() {
    return this.language;
  }
}

export default MapUiStore;
