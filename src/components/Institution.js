import React from "react";
import { Link } from 'react-router-dom';
import * as Page from '../constants/Pages'

export default function Institution({item}) {

    let styles = {
        backgroundImage: "url("+item.imageUrl+")"
    }

    let link = Page.INSTITUTIONS+'/'+item.id
    return (
            <Link className="category-link" to={link}>
                <div className="institution">
                    <div className="institution-image" style={styles}>
                    </div>
                    <div className="institution-name" >
                        {item.name}
                    </div>                   
                </div>
            </Link>
    )
    
}