import axios from "axios";
import {BASE_BOT} from "../constants/APIs";

class AuthService {
    isAuthenticated(id){
        return false
    }
    login(user) {
        return axios.post(BASE_BOT + "api/auth/login", user)
    }
    
    register(user) {
        return axios.post(BASE_BOT + "api/auth/register",user);
    }

    confirm(id, number){
        
    }
}

export default new AuthService();