import React from "react";
import InstitutionController from '../controllers/InstitutionController'
import Institution from '../components/Institution'
import { Link, useParams } from 'react-router-dom';
import '../styles/Institutions.css'

export default function Institutions(){
    const { id } = useParams()
    const institutions = InstitutionController.getInstitutionsByTypeId(id)
    let itemComponents = institutions.map(item => {
        return <Institution item = {item} key={item.id}/>
    })

    return (
        <div className="institutions">
            {itemComponents}
        </div>
    )
}