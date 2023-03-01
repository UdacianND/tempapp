import ProductService from "../entityService/ProductService";
import * as APIs from '../constants/APIs'
import axios from "axios"
import AuthService from '../service/AuthService'

class LocationController {
    async sendLocationInfo(i_latitude, i_longitude){
        try {
            let order = { 
                location :{
                    latitude : i_latitude,
                    longitude : i_longitude
                },
                orderProducts : ProductService.getDeliveryProducts()
            }
            console.log("location")
            await axios.post(APIs.ORDER_POST,  order, AuthService.getAuthHeader())
        } catch (err) {
            console.log(err)
        }

    }
}

export default new LocationController();