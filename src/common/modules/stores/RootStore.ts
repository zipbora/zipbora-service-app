import ServiceStore from "./ServiceStore";
import ServiceUiStore from "./ServiceUiStore";

export default class RootStore {
  public serviceStore: ServiceStore;
  public serviceUiStore: ServiceUiStore;

  constructor() {
    this.serviceStore = new ServiceStore(this);
    this.serviceUiStore = new ServiceUiStore(this);
  }
}
