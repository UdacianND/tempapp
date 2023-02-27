import * as APIs from '../constants/APIs'
import axios from "axios";

class CategoryController {
    async getCategoriesByInstitutionId(id){ 
        try {
            const response = await axios.get(APIs.CATEGORY_LIST +'/'+id);
            return response.data;
        } catch (err) {
            return err.response.status;
        }
    }
}
 
export default new CategoryController();

// return [ 
//     {
//         id:1,
//         name:'Ichimliklar'
//     },
//     {
//         id:2,
//         name:'Lavash'
//     },
//     {
//         id:3,
//         name:'Burger'
//     },
//     {
//         id:4,
//         name:'Salat'
//     },
//     {
//         id:5,
//         name:'Pizza'
//     },
//     {
//         id:6,
//         name:'Norin'
//     }
// ]