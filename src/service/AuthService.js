import axios from "axios";
import * as APIs from "../constants/APIs";
import * as Val from '../constants/Values'

class AuthService {
    isAuthenticated(){
        let localUser = localStorage.getItem(Val.USER)
        if(localUser == null || !localUser.isAuthenticated)
            return false;
        return true;
    }
    
    async login(user) {
        try {
            const response = await axios.post(APIs.LOGIN, user);
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

    async confirm(id, number){
        try {
            const form = new FormData()
            form.append('userId', id)
            form.append('confirmationCode', number)
            const response = await axios.post(APIs.CONFIRM, form);
            return response.status;
        } catch (err) {
            return err.response.status;
        }
    }

    async logout(id){
        try {
            const form = new FormData()
            form.append('userId', id)
            const response = await axios.post(APIs.LOGOUT, form);
            return response.status;
        } catch (err) {
            return err.response.status;
        }
    }
}

export default new AuthService();