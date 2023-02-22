import React,{useEffect} from "react";
import AuthService from "../service/AuthService";
import {useTelegram} from "../hooks/useTelegram";
import {Navigate } from 'react-router-dom';
import * as Page from '../constants/Pages'


export default function Logout(){ 
    const {user} = useTelegram()
    localStorage.clear()

    async function logout(){
        await AuthService.logout(user.id)
    }

    useEffect(() => {
        logout();
      }, []);
    
    return (
    <div className="menu">
        <Navigate to={Page.LOGIN}/>
    </div>)
}