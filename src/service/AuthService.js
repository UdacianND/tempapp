import axios from "axios";
import {BASE_BOT} from "../constants/APIs";
import * as Val from '../constants/Values'

class AuthService {
    isAuthenticated(){
        let localUser = localStorage.getItem(Val.USER)
        if(localUser == null || !localUser.isAuthenticated)
            return false;
        return true;
    }
    
    login(user) {
        return axios.post(BASE_BOT + "api/auth/login", user)
    }
    
    register(user) {
        return axios.post(BASE_BOT + "api/auth/register",user);
    }

    confirm(id, number){
        
    }

    logout(id){
        
    }
}

export default new AuthService();