import React from "react";
import ProductController from '../controllers/ProductController'
import Product from '../components/Product'
import {  useParams } from 'react-router-dom';
import '../styles/Categories.css'

export default function Products(){
    const {id} = useParams()
    const products = ProductController.getProductsByCategoryId(id)
    let itemComponents = products.map(item => {
        return <Product product = {item} key={item.id}/>
    })

    return (
            <div className="products">
                {itemComponents}
            </div>)
} 