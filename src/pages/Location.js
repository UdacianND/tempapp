import React from "react";
import {useTelegram} from "../hooks/useTelegram";
import { useGeolocated } from "react-geolocated";
import LocationController from "../controllers/LocationController";
import { Link } from 'react-router-dom';
import '../styles/Location.css';
import L from "../words/L";
 
const Location = () => {

    const {tg} = useTelegram()
    tg.MainButton.hide()
    tg.BackButton.hide()
    
    const { coords, isGeolocationAvailable } =
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
                    <h4> <L w='locatedSuccess'/> <br></br> 
                    <L w='soonDeliver'/><br></br>
                    <Link to="/"><L w='backHome'/></Link></h4>
                </div>
            )
        }else{
            return (
                <div className="locationPage">
                    <h4> <L w='locating'/></h4>
                </div>
            )
        }
    }else{
        return (
            <div className="locationPage">
                <h4> <L w='notLocated'/>
                <br></br>
                <Link to="/"><L w='backHome'/></Link>
                </h4>
            </div>
        )
    }
};

export default Location;