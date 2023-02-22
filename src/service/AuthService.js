import axios from "axios";
import * as APIs from "../constants/APIs";
import * as Val from '../constants/Values'

class AuthService {
    isAuthenticated(){
        return localStorage.getItem(Val.USER) != null
    }
    
    async login(user) {
        try {
            const response = await axios.post(APIs.LOGIN, user);
            this.setUserToken(response.data)
            return response.status;
        } catch (err) {
            return err.response.status;
        }
    }
    
    async register(user) {
        try {
            const response = await axios.post(APIs.REGISTER, user);
            return response.status;
        } catch (err) {
            return err.response.status;
        }
    }

    async confirm(number){
        try {
            const form = new FormData()
            form.append('confirmationCode', number)
            const response = await axios.post(APIs.CONFIRM, form);
            this.setUserToken(response.data)
            return response.status;
        } catch (err) {
            return err.response.status;
        }
    }

    setUserToken(user){
        localStorage.setItem(Val.USER, JSON.stringify(user))
    }

    getCurrentUser() {
        let user = localStorage.getItem("user");
        if(user == '') return null
        else return JSON.parse(user);
      }
    

    getAuthHeader(){
        return {
          headers : {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+this.getCurrentUser().accessToken
          }
        }    
      }
}

export default new AuthService();