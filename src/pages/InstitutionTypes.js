import React, {useEffect} from "react";
import InstitutionTypesController from '../controllers/InstitutionTypesController'
import InstitutionType from '../components/InstitutionType'
import '../styles/InstitutionTypes.css'
import { useTelegram } from "../hooks/useTelegram";
import * as Val from '../constants/Values'

export default function InstitutionTypes(){
    let lang = localStorage.getItem(Val.LANG)
    const {tg} = useTelegram()
    const [institutionTypes, setInsTypes] = React.useState([])
    tg.BackButton.show()

    async function getInsTypes(){
        let insTypes = await InstitutionTypesController.getAllInstitutionTypes(lang)
        setInsTypes({...insTypes})
    }
    
    useEffect(()=>{
        getInsTypes()
    },[])

    let itemComponents = institutionTypes.map(item => {
        return <InstitutionType item = {item} key={item.id}/>
    })

    return (
        <div className="institution-types">
            {itemComponents}
        </div>
    )

}