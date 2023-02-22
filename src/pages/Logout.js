import React from "react";

import {Navigate } from 'react-router-dom';
import * as Page from '../constants/Pages'


export default function Logout(){ 
    localStorage.clear()
    return (
    <div className="menu">
        <Navigate to={Page.LOGIN}/>
    </div>)
}