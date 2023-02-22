import ProductService from "../entityService/ProductService";
import * as APIs from '../constants/APIs'
import axios from "axios";

class LocationController {
    sendLocationInfo(id, i_latitude, i_longitude){
        let order = { 
            userId : id,
            location :{
                latitude : i_latitude,
                longitude : i_longitude
            },
            products : ProductService.getDeliveryProducts()
        }
        axios.post(APIs.ORDER_POST,  order);
    }
}

export default new LocationController();