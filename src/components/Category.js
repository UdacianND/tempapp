import React from "react";
import { Link } from 'react-router-dom';
import * as Page from '../constants/Pages'

export default function Category({item}) {

    let link = Page.CATEGORIES + '/' + item.id
    return (
            <Link className="products-link" to={link}>
                <div className="category">
                    {item.name}
                </div>
            </Link>
    )
    
}