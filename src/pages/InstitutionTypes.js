import React from "react";
import InstitutionTypesController from '../controllers/InstitutionTypesController'
import InstitutionType from '../components/InstitutionType'
import '../styles/InstitutionTypes.css'
import { useTelegram } from "../hooks/useTelegram";
import * as Val from '../constants/Values'

export default function InstitutionTypes(){
    let lang = localStorage.getItem(Val.LANG)
    const {tg} = useTelegram()
    tg.BackButton.show()
    const institutionTypes = InstitutionTypesController.getAllInstitutionTypes(lang)
    let itemComponents = institutionTypes.map(item => {
        return <InstitutionType item = {item} key={item.id}/>
    })

    return (
        <div className="institution-types">
            {itemComponents}
        </div>
    )

}