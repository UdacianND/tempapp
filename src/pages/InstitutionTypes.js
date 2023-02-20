import React from "react";
import InstitutionTypesController from '../controllers/InstitutionTypesController'
import InstitutionType from '../components/InstitutionType'
import '../styles/InstitutionTypes.css'
import { useTelegram } from "../hooks/useTelegram";

export default function InstitutionTypes(){
    const {tg} = useTelegram()
    tg.BackButton.show()
    const institutionTypes = InstitutionTypesController.getAllInstitutionTypes()
    let itemComponents = institutionTypes.map(item => {
        return <InstitutionType item = {item} key={item.id}/>
    })

    return (
        <div className="institution-types">
            {itemComponents}
        </div>
    )

}