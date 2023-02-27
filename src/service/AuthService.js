import axios from "axios";
import * as APIs from "../constants/APIs";
import * as Val from '../constants/Values'

class AuthService {
    isAuthenticated(){
        return localStorage.getItem(Val.USER) != null
    }
    
    async login(user) {
        try {
            let form = new FormData()
            form.append('phoneNumber', user.phoneNumber)
            localStorage.setItem(Val.PHONE_NUMBER, user.phoneNumber)

            const response = await axios.post(APIs.LOGIN, form);
            return response.success;
        } catch (err) {
            return err.response.status;
        }
    }

    async confirm(number){
        try {
            let tel = localStorage.getItem(Val.PHONE_NUMBER)
            let userData = {
                phoneNumber : tel,
                smsCode : number
            }
            const response = await axios.post(APIs.CONFIRM, userData);
            if(response.success)
                this.setUserToken(response.data)
            return response.success;
        } catch (err) {
            return err.response.status;
        }
    }

    setUserToken(user){
        localStorage.setItem(Val.USER, JSON.stringify(user))
    }

    getCurrentUser() {
        let user = localStorage.getItem("user");
        if(user == null) return null
        return JSON.parse(user);
      }
    

    getAuthHeader(){
        let token = this.getCurrentUser().accessToken
        return {
          headers : {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ token
          }
        }    
      }
      getAuthHeaderWithoutBody(){
        let token = this.getCurrentUser().accessToken
        return {
          headers : {
            'Authorization': 'Bearer '+ token
          }
        }    
      }
}

export default new AuthService();