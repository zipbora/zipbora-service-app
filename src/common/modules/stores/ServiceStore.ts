import { action, computed, makeObservable, observable } from "mobx";
import ServiceRepository from "../repositories/ServiceRepository";

class ServiceStore {
  private rootStore: { serviceStore: ServiceStore };
  number = 0;

  constructor(rootStore: { serviceStore: ServiceStore }) {
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

export default ServiceStore;
