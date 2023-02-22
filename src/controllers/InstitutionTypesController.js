import * as APIs from '../constants/APIs'
import axios from "axios";

class InstitutionTypesController {
    async getAllInstitutionTypes(lang){
        try {
            const form = new FormData()
            form.append('lang', lang)
            const response = await axios.post(APIs.INSTITUTION_TYPE_LIST, form);
            return response.data;
        } catch (err) {
            return err.response.status;
        }
    }
}

export default new InstitutionTypesController();

// return [
//     {
//         id:1, 
//         name:'Cafe'
//     },
//     {
//         id:2,
//         name:'Restoran'
//     },
//     {
//         id:3,
//         name:'Dorixona'
//     },
//     {
//         id:4,
//         name:'Kutubxona'
//     },
//     {
//         id:5,
//         name:'Butik'
//     }
// ]