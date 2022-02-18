import { action, computed, makeObservable, observable } from "mobx";
import ServiceRepository from "src/stores/repositories/ServiceRepository";
/**
 * This store is for data fetch
 */
class ServiceDomainStore {
  private rootStore;
  number = 0;

  constructor(rootStore) {
    this.rootStore = rootStore;
    makeObservable(this, {
      number: observable, // 4버전의 @observable와 동일합니다.
      increase: action, // 4버전의 @action과 동일합니다.
      decrease: action,
      double: computed,
    });
  }

  get double() {
    return this.number * 2;
  }

  increase = () => {
    this.number += 2;
  };

  decrease = () => {
    this.number += 1;
  };
}

export default ServiceDomainStore;
