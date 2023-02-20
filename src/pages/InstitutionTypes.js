import React from "react";
import InstitutionTypesController from '../controllers/InstitutionTypesController'
import InstitutionType from '../components/InstitutionType'
import '../styles/InstitutionTypes.css'
import { useTelegram } from "../hooks/useTelegram";

export default function InstitutionTypes(){
    const {tg} = useTelegram()
    tg.BackButton.show()
    tg.BackButton.onClick(()=> {
        let currentPage = window.location.pathname.split('/').pop();
        if(currentPage === 'institutionTypes'){
            tg.showAlert("Buyurtma bekor qilinsinmi", ()=>{
                localStorage.removeItem("products")
            })
        }
        window.history.back()
    })
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