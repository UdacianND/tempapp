import React from "react";
import { Link } from 'react-router-dom';
import * as Page from '../constants/Pages'

export default function InstitutionType({item}) {

    let link = Page.INSTITUTION_TYPES +'/'+item.id
    return (
            <Link className="item-link" to={link}>
                <div className="institution-type">
                    {item.name}
                </div>
            </Link>
    )
    
}