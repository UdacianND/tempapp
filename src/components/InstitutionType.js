import React from "react";
import { Link } from 'react-router-dom';

export default function InstitutionType({item}) {

    let link = '/institutionTypes/'+item.id
    return (
            <Link className="item-link" to={link}>
                <div className="institution-type">
                    {item.name}
                </div>
            </Link>
    )
    
}