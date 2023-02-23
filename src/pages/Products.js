import React,{useEffect} from "react";
import ProductController from '../controllers/ProductController'
import Product from '../components/Product'
import {  useParams } from 'react-router-dom';
import '../styles/Categories.css'
import '../styles/Institutions.css'
import * as Val from '../constants/Values'

export default function Products(){
    const {id} = useParams()
    let lang = localStorage.getItem(Val.LANG)

    const [products, setProducts] = React.useState({
        list:[]
    })

    async function getProducts(){
        let productList = await ProductController.getProductsByCategoryId(id, lang)
        setProducts(pre => ({...pre, list:productList}))
    }

    useEffect(()=>{
        getProducts()
    },[])

    let itemComponents = products.list.map(item => {
        return <Product product = {item} key={item.id}/>
    })

    return (
            <div className="products">
                {itemComponents}
            </div>)
}  