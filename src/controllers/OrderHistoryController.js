import * as APIs from '../constants/APIs'
import axios from "axios";

class OrderHistoryController{
    async getOrderHistoryByUserId(id, lang){
        try {
            const form = new FormData()
            form.append('lang', lang)
            const response = await axios.post(APIs.ORDER_HISTORY_LIST+'/'+id, form);
            return response.data;
        } catch (err) {
            return err.response.status;
        }
    }

    cleanHistory(id){
        axios.delete(APIs.ORDER_HISTORY_CLEAR+'/'+id)
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
//                 price: 18000,
//                 institution : 'Oqtepa lavash'
//             },
//             {
//                 id: 2,
//                 name: 'Lavash',
//                 count : 1,
//                 price: 24000,
//                 institution : 'Oqtepa lavash'
//             }
//         ],
//         totalPrice : 42000
//     },
//     {
//         id : 2,
//         date: '10-01-2023',
//         products :[
//             {
//                 id: 3,
//                 name: 'Coca cola',
//                 count : 2,
//                 price: 18000,
//                 institution : 'Oqtepa lavash'
//             },
//             {
//                 id: 4,
//                 name: 'Lavash',
//                 count : 1,
//                 price: 24000,
//                 institution : 'Oqtepa lavash'
//             }
//         ],
//         totalPrice : 42000
//     },
//     {
//         id : 3,
//         date: '10-01-2023',
//         products :[
//             {
//                 id: 5,
//                 name: 'Coca cola',
//                 count : 2,
//                 price: 18000,
//                 institution : 'Oqtepa lavash'
//             },
//             {
//                 id: 6,
//                 name: 'Lavash',
//                 count : 1,
//                 price: 24000,
//                 institution : 'Oqtepa lavash'
//             }
//         ],
//         totalPrice : 42000
//     },
//     {
//         id : 4,
//         date: '10-01-2023',
//         products :[
//             {
//                 id: 7,
//                 name: 'Coca cola',
//                 count : 2,
//                 price: 18000,
//                 institution : 'Oqtepa lavash'
//             },
//             {
//                 id: 8,
//                 name: 'Lavash',
//                 count : 1,
//                 price: 24000,
//                 institution : 'Oqtepa lavash'
//             }
//         ],
//         totalPrice : 42000
//     },
//     {
//         id : 5,
//         date: '10-01-2023',
//         products :[
//             {
//                 id: 9,
//                 name: 'Coca cola',
//                 count : 2,
//                 price: 18000,
//                 institution : 'Oqtepa lavash'
//             },
//             {
//                 id: 10,
//                 name: 'Lavash',
//                 count : 1,
//                 price: 24000,
//                 institution : 'Oqtepa lavash'
//             }
//         ],
//         totalPrice : 42000
//     }
// ]