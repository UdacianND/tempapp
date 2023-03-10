import axios from "axios";
import * as APIs from "../constants/APIs";
import * as Val from '../constants/Values'

class AuthService {
    isAuthenticated(){
        let user = JSON.parse(localStorage.getItem(Val.USER))
        if(user == null)
            return false;
        let expireMSeconds = user[Val.USER_TOKEN_EXPIRE]
        let currentMSeconds = Date.now()
        return currentMSeconds < expireMSeconds
    }
    
    async login(user) {
        try {
            let form = new FormData()
            form.append('phoneNumber', user.phoneNumber)
            localStorage.setItem(Val.PHONE_NUMBER, user.phoneNumber)

            const response = await axios.post(APIs.LOGIN, form);
            return response.data.success;
        } catch (err) {
            return false;
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
            if(response.data.success)
                this.setUserToken(response.data.data)
            return true
        } catch (err) {
          console.log(err.response)
            return false;
        }
    }

    setUserToken(user){
        let mSeconds = Date.now() + Val.TOKEN_EXPIRE_IN_ADVANCE
        user[Val.USER_TOKEN_EXPIRE] = mSeconds
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
      getAppJsonHeader(){
        return {
          headers : {
            'Content-Type': 'application/json',
          }
        }    
      }

}

export default new AuthService();