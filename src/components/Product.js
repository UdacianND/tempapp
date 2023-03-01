import React from "react";
import ProductService from "../entityService/ProductService";
import '../styles/Products.css'

export default function Product({product}) {
    let savedProduct = ProductService.getById(product.id)
    if(savedProduct != null)
        product['count'] = savedProduct.count
    else
        product['count'] = 0
        
    const [item, setItem] = React.useState(product);
    let styles = {
        backgroundImage: "url("+item.imageUrl+")"
    }

    function handleAddToCart(e){
        item.count = item.count + 1
        ProductService.saveProduct(item)
        setItem({...item})
    }

    function handleRemoveFromCart(){
        item.count = item.count - 1
        ProductService.saveProduct(item)
        setItem({...item})
    }

    return (
        <div className="product">
            <div className="product-image" style={styles}>            
            </div>
            <div className="product-body">
                <div className="product-name">
                    {item.name}
                </div>
                <div className="product-price">
                    {item.price} so'm
                </div>
            </div>
            <div className="product-order">
                {item.count === 0 ? 
                <div className="add-button" onClick={handleAddToCart}>
                    <i className="fa-solid fa-plus"></i>
                </div> : 
                <div className="manage-count">
                    <div className="minus-button change-count" onClick={handleRemoveFromCart}>
                        <i className="fa-solid fa-minus"></i>
                    </div>
                    <div className="product-count">{item.count}</div>
                    <div className="plus-button change-count" onClick={handleAddToCart}>
                        <i className="fa-solid fa-plus"></i>
                    </div>
                </div>}
            </div>
        </div>
    )
    
}