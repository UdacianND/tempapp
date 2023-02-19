import React from "react";

export default function Order({order}) {

    return (
            <div className="order">
                <div className="order-product-name">
                    {order.name}
                </div>
                <div className="order-product-count" >
                    |{order.count}X
                </div>   
                <div className="order-product-price" >
                    |{order.price * order.count} so'm
                </div>                  
            </div>
    )
    
}