import * as Val from '../constants/Values'

class UserService {
    user
    getUser(){
        this.user = localStorage.getItem(Val.USER)
        if(this.user == null){
            let botUser = this.getBotUser()
            this.user = {
                id : botUser.id,
                name : botUser.username,
                isAuthenticated : false
            }
            
        }else{
            this.user = JSON.parse(this.user)
        }
        return this.user
    }

    setUserAuthenticated (){
        this.user = this.getUser()
        this.user.isAuthenticated = true
        localStorage.setItem(Val.USER, JSON.stringify(this.user))
    }

    getBotUser(){
        const tg = window.Telegram.WebApp;
        return tg.initDataUnsafe?.user
    }
}

export default new UserService()