import { IService } from "../interfaces/service.interface";
import { getData } from "../utils/getData";

class Service {
  services: IService[] = [];
  constructor() {
    this.services = [];
  }

  async get() {
    try {
      return await getData(this.services);
    } catch (error) {
      throw error;
    }
  }
}

export default new Service();
