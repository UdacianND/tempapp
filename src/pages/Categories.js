import React from "react";
import CategoryController from '../controllers/CategoryController'
import Category from '../components/Category'
import { Link, useParams } from 'react-router-dom';
import '../styles/Categories.css'

export default function Categories(){
    const {id} = useParams()
    const categories = CategoryController.getCategoriesByInstitutionId(id)
    let itemComponents = categories.map(item => {
        return <Category item = {item} key={item.id}/>
    })

    return (
        <div className="container">
            <div className="categories">
                {itemComponents}
            </div>
        </div>)
} 