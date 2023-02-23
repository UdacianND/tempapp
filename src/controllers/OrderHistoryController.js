import * as APIs from '../constants/APIs'
import axios from "axios";
import AuthService from '../service/AuthService';

class OrderHistoryController{
    async getOrderHistory(lang){
        try {
            const formData = new FormData();
            formData.append('lang',lang)
            const response = await axios.post(APIs.ORDER_HISTORY_LIST, formData, AuthService.getAuthHeaderWithoutBody());
            return response.data;
        } catch (err) {
            return err.response.status;
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
//         date: '10-01-2023',
//         products :[
//             {
//                 id: 1,
//                 name: 'Coca cola',
//                 count : 2,
//                 price: 9000,
//                 institution : 'Oqtepa lavash'
//             },
//             {
//                 id: 2,
//                 name: 'Lavash',
//                 count : 1,
//                 price: 24000,
//                 institution : 'Oqtepa lavash'
//             }
//         ]
//     },
//     {
//         id : 2,
//         date: '10-01-2023',
//         products :[
//             {
//                 id: 3,
//                 name: 'Coca cola',
//                 count : 2,
//                 price: 9000,
//                 institution : 'Oqtepa lavash'
//             },
//             {
//                 id: 4,
//                 name: 'Lavash',
//                 count : 1,
//                 price: 24000,
//                 institution : 'Oqtepa lavash'
//             }
//         ]
//     },
//     {
//         id : 3,
//         date: '10-01-2023',
//         products :[
//             {
//                 id: 5,
//                 name: 'Coca cola',
//                 count : 2,
//                 price: 9000,
//                 institution : 'Oqtepa lavash'
//             },
//             {
//                 id: 6,
//                 name: 'Lavash',
//                 count : 1,
//                 price: 24000,
//                 institution : 'Oqtepa lavash'
//             }
//         ]
//     },
//     {
//         id : 4,
//         date: '10-01-2023',
//         products :[
//             {
//                 id: 7,
//                 name: 'Coca cola',
//                 count : 2,
//                 price: 9000,
//                 institution : 'Oqtepa lavash'
//             },
//             {
//                 id: 8,
//                 name: 'Lavash',
//                 count : 1,
//                 price: 24000,
//                 institution : 'Oqtepa lavash'
//             }
//         ]
//     },
//     {
//         id : 5,
//         date: '10-01-2023',
//         products :[
//             {
//                 id: 9,
//                 name: 'Coca cola',
//                 count : 2,
//                 price: 9000,
//                 institution : 'Oqtepa lavash'
//             },
//             {
//                 id: 10,
//                 name: 'Lavash',
//                 count : 1,
//                 price: 24000,
//                 institution : 'Oqtepa lavash'
//             }
//         ]
//     }
// ]