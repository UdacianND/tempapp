import React from "react";
import AuthService from "../service/AuthService";
import {useTelegram} from "../hooks/useTelegram";
import {Navigate } from 'react-router-dom';
import * as Page from '../constants/Pages'


export default function Logout(){ 
    const {user} = useTelegram()
    localStorage.clear()
    AuthService.logout(user.id)
    return (
    <div className="menu">
        <Navigate to={Page.LOGIN}/>
    </div>)
}