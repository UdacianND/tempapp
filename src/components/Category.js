import React from "react";
import { Link } from 'react-router-dom';

export default function Category({item}) {

    let link = '/categories/' + item.id
    return (
            <Link className="products-link" to={link}>
                <div className="category">
                    {item.name}
                </div>
            </Link>
    )
    
}