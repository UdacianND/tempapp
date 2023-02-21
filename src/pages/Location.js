import React from "react";
import { useGeolocated } from "react-geolocated";
import LocationController from "../controllers/LocationController";
import { Link } from 'react-router-dom';
import {useTelegram} from "../hooks/useTelegram";

const Location = () => {

    const {tg} = useTelegram()
    tg.MainButton.hide()
    tg.BackButton.hide()
    
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: true,
            },
            userDecisionTimeout: 10000,
        });

    if(isGeolocationAvailable && isGeolocationEnabled){
        if(coords){
            LocationController.sendLocationInfo(coords.latitude, coords.longitude)
            return (
                <div> Joylashuvingiz aniqlandi! <br></br> 
                Buyurtmangiz tez orada yetkaziladi
                <Link to="/">Bosh sahifaga qaytish</Link></div>
            )
        }else{
            return (
                <div> Joylashuvingiz aniqlanmoqda</div>
            )
        }
    }else{
        return (
            <div> Joylashuvni aniqlab bo'lmadi</div>
        )
    }
};

export default Location;