import React from "react";
import OrderedProductItem from "./OrderedProductItem";
import L from "../words/L";

export default function OrderHistory({order}) {
    //let products = order.orderProducts;

    //let totalPrice = order.overallPrice + order.deliveryPrice
    //products.length === 0 ? 0 : products.map(x=> x.price * x.quantity)
    //.reduce((total, current) => total + current)
    let date = new Date(order.deliveryTime).toLocaleDateString()

    let orderedProducts = order.orderProducts.map( product => 
    <OrderedProductItem productItem = {product} key={product.id}/>)

    return (
        <div className="order-history-item">
            <div className="ordered-date">{date}</div>
            <table className="product-table">{orderedProducts}</table>
            <div className="order-total-price"><L w='total'/> : {order.overallPrice} so'm</div>
            <div className="order-total-price"><L w='delivery'/> : {order.deliveryPrice} so'm</div>
        </div>
    ) 
    
}