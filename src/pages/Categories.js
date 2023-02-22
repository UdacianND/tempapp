import React,{useEffect} from "react";
import CategoryController from '../controllers/CategoryController'
import Category from '../components/Category'
import { useParams } from 'react-router-dom';
import '../styles/Categories.css'
import * as Val from '../constants/Values'

export default function Categories(){
    const {id} = useParams()
    let lang = localStorage.getItem(Val.LANG)

    const [categories, setCategories] = React.useState([])

    async function getCategories(){
        let categoryList = await CategoryController.getCategoriesByInstitutionId(id, lang)
        setCategories({...categoryList})
    }

    useEffect(()=>{
        getCategories()
    },[])
    
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