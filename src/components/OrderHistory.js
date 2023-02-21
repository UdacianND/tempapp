import React from "react";
import OrderedProductItem from "./OrderedProductItem";

export default function OrderHistory({order}) {

    let orderedProducts = order.products.map( product => 
    <OrderedProductItem productItem = {product} key={product.id}/>)

    return (
        <div className="order-history-item">
            <div className="ordered-date">{order.date}</div>
            <table className="product-table">{orderedProducts}</table>
            <div className="order-total-price">Umumiy : {order.totalPrice} so'm</div>
        </div>
    )
    
}