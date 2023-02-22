import React from "react";
import ProductController from '../controllers/ProductController'
import Product from '../components/Product'
import {  useParams } from 'react-router-dom';
import '../styles/Categories.css'
import '../styles/Institutions.css'
import * as Val from '../constants/Values'

export default function Products(){
    const {id} = useParams()
    let lang = localStorage.getItem(Val.LANG)
    const products = ProductController.getProductsByCategoryId(id, lang)
    let itemComponents = products.map(item => {
        return <Product product = {item} key={item.id}/>
    })

    return (
            <div className="products">
                {itemComponents}
            </div>)
}  