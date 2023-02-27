import React,{useEffect} from "react";
import InstitutionController from '../controllers/InstitutionController'
import Institution from '../components/Institution'
import { Link, useParams } from 'react-router-dom';
import '../styles/Institutions.css'
import * as Val from '../constants/Values'

export default function Institutions(){
    let lang = localStorage.getItem(Val.LANG)
    const { id } = useParams()
    const [institutions, setInstitutions] = React.useState({
        list:[]
    })

    async function getInstitutions(){
        let institutions = await InstitutionController.getInstitutionsByTypeId(id, lang)
        setInstitutions(pre => ({...pre, list:institutions}))
    }

    useEffect(()=>{
        getInstitutions()
    },[])

    let itemComponents = institutions.list.map(ins => {
        let item = {
            id : ins.id,
            name : lang === 'uz'? ins.nameUz : ins.nameRu,
            imageUrl : ins.imageUrl
        }
        return <Institution item = {item} key={item.id}/>
    })
  
    return (
        <div className="institutions">
            {itemComponents}
        </div>
    )
}