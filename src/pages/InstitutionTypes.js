import React, {useEffect} from "react";
import InstitutionTypesController from '../controllers/InstitutionTypesController'
import InstitutionType from '../components/InstitutionType'
import '../styles/InstitutionTypes.css'
import { useTelegram } from "../hooks/useTelegram";
import * as Val from '../constants/Values'

export default function InstitutionTypes(){
    let lang = localStorage.getItem(Val.LANG)
    const {tg} = useTelegram()
    const [institutionTypes, setInsTypes] = React.useState({
        list : []
    })
    tg.BackButton.show()

    useEffect(()=>{
        async function getInsTypes(){
            let insTypes = await InstitutionTypesController.getAllInstitutionTypes()
            setInsTypes(pre => ({...pre, list:insTypes}))
        }
        getInsTypes()
    },[])

    let itemComponents = institutionTypes.list.map(insT => {
        let item = {
            id : insT.id,
            name : lang === 'uz'? insT.nameUz : insT.nameRu
        }
        return <InstitutionType item = {item} key={item.id}/>
    })

    return (
        <div className="institution-types">
            {itemComponents}
        </div>
    )

}