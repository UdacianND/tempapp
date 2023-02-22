import React from "react";
import Words from './Words'
import * as Val from '../constants/Values'

export default function L({w}){
    let data = Words.data
    let lang = localStorage.getItem(Val.LANG);
    let word = data[w][lang]
    return (<>{word}</>)
}