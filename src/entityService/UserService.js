import * as Val from '../constants/Values'
import User from '../models/User'

class UserService {
    user
    getUser(){
        if(this.user != null)
            return this.user
        let localUser = localStorage.getItem(Val.USER)
        if(localUser == null){
            let botUser = this.getBotUser()
            this.user = {
                id : botUser.id,
                name : botUser.username,
                isAuthenticated : false
            }
            
        }else{
            this.user = JSON.parse(localUser)
        }
        return this.user
    }

    setUserAuthenticated (){
        let user = this.getUser()
        user.isAuthenticated = true
        localStorage.setItem(Val.USER, JSON.stringify(user))
    }

    getBotUser(){
        const tg = window.Telegram.WebApp;
        return tg.initDataUnsafe?.user
    }
}

export default new UserService()