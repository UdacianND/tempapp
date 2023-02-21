import React from "react";
import AuthService from "../service/AuthService";
import {useTelegram} from "../hooks/useTelegram";
import { Link, Navigate } from 'react-router-dom';


export default function Logout(){ 
    localStorage.clear()
    AuthService.logout(1)
    return (
    <div className="menu">
        <Navigate to='/login'/>
    </div>)
}