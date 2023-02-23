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
    
    async register(user, id) {
        try {
            let loginUser = {
                phoneNumber : user.phoneNumber,
                password : user.password,
                chatId : id
            }
            const response = await axios.post(APIs.REGISTER, loginUser);
            return response.status;
        } catch (err) {
            return err.response.status;
        }
    }

    async confirm(id, number){
        try {
            let userData = {
                chatId : id,
                confirmationCode : number
            }
            const response = await axios.post(APIs.CONFIRM, userData);
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