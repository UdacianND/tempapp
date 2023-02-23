import * as APIs from '../constants/APIs'
import axios from "axios";

class ProductController {
    async getProductsByCategoryId(id, lang){
        try {
            const response = await axios.get(APIs.PRODUCT_LIST+'/'+id, 
            { params: { lang } });
            return response.data;
        } catch (err) {
            return err.response.status;
        }
    }
}

export default new ProductController();

// let url = 'https://th.bing.com/th/id/OIP.dNCYKENMQT0e6qVY3uzTzQHaE7?pid=ImgDet&rs=1'
// return [
//     {
//         id : 1,
//         name : 'Coca cola',
//         price : 12000, 
//         imageUrl : url
//     },
//     {
//         id : 2,
//         name : 'Pepsi',
//         price : 9000, 
//         imageUrl : url
//     },
//     {
//         id : 3,
//         name : 'Mochito',
//         price : 12000, 
//         imageUrl : url
//     },
//     {
//         id : 4,
//         name : 'Lavash',
//         price : 12000, 
//         imageUrl : url
//     },
//     {
//         id : 5,
//         name : 'Kokteyl',
//         price : 12000, 
//         imageUrl : url
//     },
//     {
//         id : 6,
//         name : 'Dena',
//         price : 12000, 
//         imageUrl : url
//     },
//     {
//         id : 7,
//         name : 'Bliss',
//         price : 12000, 
//         imageUrl : url
//     },
//     {
//         id : 8,
//         name : 'Fanta',
//         price : 12000, 
//         imageUrl : url
//     },
//     {
//         id : 9,
//         name : 'Montain Deev',
//         price : 12000, 
//         imageUrl : url
//     },
//     {
//         id : 10,
//         name : 'Lavash',
//         price : 12000, 
//         imageUrl : url
//     },
//     {
//         id : 11,
//         name : 'Burger',
//         price : 12000, 
//         imageUrl : url
//     }
// ]