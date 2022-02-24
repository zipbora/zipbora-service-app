import ServiceDomainStore from "./ServiceDomainStore";
import ServiceUiStore from "./ServiceUiStore";

export default class RootStore {
  public serviceDomainStore: ServiceDomainStore;
  public serviceUiStore: ServiceUiStore;

  constructor() {
    this.serviceDomainStore = new ServiceDomainStore(this);
    this.serviceUiStore = new ServiceUiStore(this);
  }
}
