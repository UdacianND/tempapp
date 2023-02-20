import React from "react";
import AuthService from "../service/AuthService";
import {useTelegram} from "../hooks/useTelegram";
import { Link } from 'react-router-dom';
import * as Val from '../constants/Values'
import ProductService from "../entityService/ProductService";


export default function Home(){ 
    const {tg} = useTelegram()
    // if(AuthService.isAuthenticated(user.id))
    //     return (<Navigate to='/login'/>)
    tg.MainButton.hide()
    tg.BackButton.hide()
    tg.MainButton.onClick(()=>{
        console.log("hone")
        //history.push('order/products')
    })

    window.onbeforeunload = function() { 
            tg.showAlert("Oyna yopildi", ()=>{
                ProductService.clearOrderPackage()
            })
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