import { typesService } from "../config/constants";
import { getData } from "../utils/getData";

class TypeService {
    typesService: any[] = []
    constructor(){
        this.typesService = typesService
    }

    async get(){
        return await  getData(this.typesService)
    }
}

export default new TypeService()