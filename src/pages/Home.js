import React from "react";
import AuthService from "../service/AuthService";
import {useTelegram} from "../hooks/useTelegram";
import { Link } from 'react-router-dom';

export default function Home(){
    // const {user} = useTelegram()
    // if(AuthService.isAuthenticated(user.id))
    //     return (<Navigate to='/login'/>)
    return (
    <div className="menu">
        <Link to="/institutionTypes">
            <div className="menu-link">Buyurtma berish</div>
        </Link>
        
        <Link to="/order-history">
            <div className="menu-link">Buyurtmalar tarixi</div>
        </Link>
        <Link to="/settings">
            <div className="menu-link">Sozlamalar</div>
        </Link>
        <Link to="/logout">
            <div className="menu-link">Chiqish</div>
        </Link>
        
    </div>)
}