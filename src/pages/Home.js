import React from "react";
import AuthService from "../service/AuthService";
import {useTelegram} from "../hooks/useTelegram";
import { Link, Navigate } from 'react-router-dom';
import * as Val from '../constants/Values'
import { useNavigate } from "react-router-dom";
import * as Page from '../constants/Pages'
import Words from "../words/Words";
import L from "../words/L";
 

export default function Home(){ 
    const navigate = useNavigate();
    function backButton() {
        let currentPage = window.location.pathname.split('/').pop();
        if(currentPage === 'institutionTypes'){
            tg.showAlert(data['orderCancelled'][currentLang])
        }
        window.history.back()
    }

    function orderButton(){
        navigate(Page.ORDER)
    }

    let currentLang = localStorage.getItem(Val.LANG)
    if(currentLang == null){
        currentLang = 'uz'
        localStorage.setItem(Val.LANG, currentLang)
    }
    let [lang, setLang] = React.useState(currentLang)

    let data = Words.data

    const {tg} = useTelegram()
    if(!AuthService.isAuthenticated())
        return (<Navigate to={Page.LOGIN}/>)

    tg.MainButton.hide()
    tg.BackButton.hide()

    tg.MainButton.offClick(orderButton)
    tg.MainButton.onClick(orderButton)
    tg.BackButton.offClick(backButton)
    tg.BackButton.onClick(backButton)

    console.log(window.location.pathname)
    tg.BackButton.onClick()
    
    localStorage.removeItem(Val.PRODUCTS)

    function changeLang(e){
        localStorage.setItem(Val.LANG, e.target.value)
        setLang(e.target.value)
    }

    return (
        <div className="home-container">
            <label htmlFor="state"></label>
            <select id="state" className="form-control lang-select" onChange={(e)=>changeLang(e)} value = {lang}>
                <option value="ru">Ru</option>
                <option value="uz">Uz</option>
            </select>
            <div className="menu">
                <Link to={Page.INSTITUTION_TYPES}>
                    <div className="menu-link"><L w='book'/></div>
                </Link>
                <Link to={Page.ORDER_HISTORY}>
                    <div className="menu-link"><L w='orderHistory'/></div>
                </Link>
                <Link to={Page.LOGOUT}>
                    <div className="menu-link"><L w='logout'/></div>
                </Link>
            </div>
        </div>
    )
}