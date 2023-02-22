import React from "react";
import Order from "../components/Order";
import ProductService from "../entityService/ProductService";
import '../styles/Order.css'
import { useNavigate } from "react-router-dom";
import {useTelegram} from "../hooks/useTelegram";
import * as Page from '../constants/Pages'
import Words from "../words/Words";
import L from "../words/L";
import * as Val from '../constants/Values'

export default function OrderPage(){
    const {tg} = useTelegram()
    const navigate = useNavigate();

    let lang = localStorage.getItem(Val.LANG)
    let data = Words.data

    const products = ProductService.getOrderedProducts()
    let totalPrice = products.length === 0 ? 0 : products.map(x=> x.price * x.count)
    .reduce((total, current) => total + current)
    let itemComponents = products.map(item => {
        return <Order order= {item} key={item.id}/>
    }) 

    tg.MainButton.onClick(()=>{
        navigate(Page.GEOLOCATION) 
    })
    tg.MainButton.setParams({
        text: data['book'][lang]
    })

    return (
            <div className="orders">
                <div className="order-header"><L w='yourOrder'/></div>
                <div className="orderedProducts">
                    {totalPrice !== 0 && itemComponents}
                </div>
                <div className="order-total"><L w='total'/> : <br></br>{totalPrice} so'm</div>
        </div>)
} 