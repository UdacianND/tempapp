import React from "react";

export default function OrderedProductItem({productItem}) {
    return (
        <tr className="ordered-product-item">
            <td className="ordered-product-name">{productItem.name}</td>
            <td className="ordered-product-count">{productItem.count}X</td>
            <td className="ordered-product-price">{productItem.price * productItem.count}</td>
            <td className="ordered-product-institution">{productItem.institution}</td>
        </tr>
    )    
}