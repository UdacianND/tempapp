import * as APIs from '../constants/APIs'
import axios from "axios";
import AuthService from '../service/AuthService';

class OrderHistoryController{
    async getOrderHistory(){
        try {
            const response = await axios.post(APIs.ORDER_HISTORY_LIST, null, AuthService.getAuthHeaderWithoutBody());
            return response.data.data;
        } catch (err) {
            return [];
        }
    }

    cleanHistory(){
        axios.delete(APIs.ORDER_HISTORY_CLEAR, AuthService.getAuthHeader())
        .then( response => {console.log(response)}, error=>{console.log(error)} );
    }
}

export default new OrderHistoryController()

// return [
//     { 
//         id : 1,
//         overallPrice : 12000,
//         deliveryPrice : 2000,
//         deliveryTime: '10-01-2023',
//         orderProducts :[
//             {
//                 product: {
//                     nameUz : 'Cola',
//                     nameRu : 'ColaRu',
//                 },
//                 quantity : 2,
//                 price : 19000
//             }
//         ]
//     }
// ]