import React from "react";
import Order from "../components/Order";
import ProductService from "../entityService/ProductService";
import '../styles/Order.css'

export default function OrderPage(){
    const products = ProductService.getOrderedProducts()
    let totalPrice = products.length === 0 ? 0 : products.map(x=> x.price * x.count)
    .reduce((total, current) => total + current)
    let itemComponents = products.map(item => {
        return <Order order= {item} key={item.id}/>
    })

    return (
            <div className="orders">
                <div className="order-header">Buyurtmagiz</div>
                <div className="orderedProducts">
                    {totalPrice !== 0 && itemComponents}
                </div>
                <div className="order-total">Hammasi : <br></br>{totalPrice} so'm</div>
        </div>)
} 