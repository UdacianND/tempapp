import ProductService from "../entityService/ProductService";
import * as APIs from '../constants/APIs'
import axios from "axios"
import AuthService from '../service/AuthService'

class LocationController {
    sendLocationInfo(i_latitude, i_longitude){
        let order = { 
            location :{
                latitude : i_latitude,
                longitude : i_longitude
            },
            products : ProductService.getDeliveryProducts()
        }
        axios.post(APIs.ORDER_POST,  order, AuthService.getAuthHeader())
    }
}

export default new LocationController();