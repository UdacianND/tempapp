import React from "react";

export default function OrderedProductItem({productItem}) {
    return (
        <tr className="ordered-product-item">
            <td className="ordered-product-name">{productItem.product.name}</td>
            <td className="ordered-product-count">{productItem.quantity}X</td>
            <td className="ordered-product-price">{productItem.price}</td>
        </tr>
    )    
}