import { typesService } from "../config/constants";
import { ITypeService } from "../interfaces/typeService.interface";
import { getData } from "../utils/getData";

class TypeService {
  typesService: ITypeService[] = [];
  constructor() {
    this.typesService = typesService;
  }

  async get() {
    return await getData<ITypeService[]>(this.typesService, 1000);
  }
}

export default new TypeService();
