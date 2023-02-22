import React from "react";
import InstitutionController from '../controllers/InstitutionController'
import Institution from '../components/Institution'
import { Link, useParams } from 'react-router-dom';
import '../styles/Institutions.css'
import * as Val from '../constants/Values'

export default function Institutions(){
    let lang = localStorage.getItem(Val.LANG)
    const { id } = useParams()
    const institutions = InstitutionController.getInstitutionsByTypeId(id, lang)
    let itemComponents = institutions.map(item => {
        return <Institution item = {item} key={item.id}/>
    })
 
    return (
        <div className="institutions">
            {itemComponents}
        </div>
    )
}