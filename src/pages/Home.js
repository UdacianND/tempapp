import React from "react";
import AuthService from "../service/AuthService";
import {useTelegram} from "../hooks/useTelegram";
import { Link } from 'react-router-dom';
import * as Val from '../constants/Values'
import ProductService from "../entityService/ProductService";
import { useNavigate } from "react-router-dom";


export default function Home(){ 
    const {tg} = useTelegram()
    const navigate = useNavigate();
    // if(AuthService.isAuthenticated(user.id))
    //     return (<Navigate to='/login'/>)
    tg.MainButton.hide()
    tg.BackButton.hide()
    tg.MainButton.onClick(()=>{
        console.log("hone")
        navigate('order/products')
    })

    window.onbeforeunload = function() { 
            localStorage.removeItem('products')
        }
    
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