import React from "react";
import { useGeolocated } from "react-geolocated";
import LocationController from "../controllers/LocationController";
import { Link } from 'react-router-dom';
import {useTelegram} from "../hooks/useTelegram";
import '../styles/Location.css';

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

    if(isGeolocationAvailable){
        if(coords){
            LocationController.sendLocationInfo(coords.latitude, coords.longitude)
            return (
                <div className="locationPage">
                    <h4> Joylashuvingiz aniqlandi! <br></br> 
                    Buyurtmangiz tez orada yetkaziladi<br></br>
                    <Link to="/">Bosh sahifaga qaytish</Link></h4>
                </div>
            )
        }else{
            return (
                <div className="locationPage">
                    <h4> Joylashuvingiz aniqlanmoqda</h4>
                </div>
            )
        }
    }else{
        return (
            <div className="locationPage">
                <h4> Joylashuvni aniqlab bo'lmadi
                <br></br>
                <Link to="/">Bosh sahifaga qaytish</Link>
                </h4>
            </div>
        )
    }
};

export default Location;