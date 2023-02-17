import axios from "axios";
import {API_URL} from "../Values";

class AuthService {
    isAuthenticated(id){
        
    }
    login(user) {
        return axios.post(API_URL + "api/auth/login", user)
    }
    
    register(user) {
        return axios.post(API_URL + "api/auth/register",user);
    }

    confirm(id, number){
        
    }
}

export default new AuthService();