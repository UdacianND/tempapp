import React from "react";
import OrderedProductItem from "./OrderedProductItem";
import L from "../words/L";

export default function OrderHistory({order}) {
    let products = order.products;

    let totalPrice = products.length === 0 ? 0 : products.map(x=> x.price * x.count)
    .reduce((total, current) => total + current)

    let orderedProducts = products.map( product => 
    <OrderedProductItem productItem = {product} key={product.id}/>)

    return (
        <div className="order-history-item">
            <div className="ordered-date">{order.date}</div>
            <table className="product-table">{orderedProducts}</table>
            <div className="order-total-price"><L w='total'/> : {totalPrice} so'm</div>
        </div>
    ) 
    
}