import React, {useState, useEffect} from "react";
import {useTelegram} from "../hooks/useTelegram";
import { useGeolocated } from "react-geolocated";
import LocationController from "../controllers/LocationController";
import { Link } from 'react-router-dom';
import '../styles/Location.css';
import L from "../words/L";
import { useNavigate } from "react-router-dom";
 
const Location = () => {
    console.log(window.location.pathname)
    const navigate = useNavigate();
    const {tg} = useTelegram()
    tg.MainButton.hide()
    tg.BackButton.hide()

    const [isLocationDetected, setLocationDetected] = useState(false)
    
    const { coords, isGeolocationAvailable } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: true,
            },
            userDecisionTimeout: 6000,
        });

    async function sendLocation(){
        if(isLocationDetected){
            await LocationController.sendLocationInfo(coords.latitude, coords.longitude)
        }
    }

    useEffect(()=>{
        sendLocation()
    }, [isLocationDetected])

    if(isGeolocationAvailable){
        if(coords){
            if(!isLocationDetected)
                setLocationDetected(true)
            return (
                <div className="locationPage">
                    <h4> <L w='locatedSuccess'/> <br></br> 
                    <L w='soonDeliver'/><br></br>
                    <Link to="/" className="backHome btn btn-primary"><L w='backHome'/></Link></h4>
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
                <Link to="/" className="backHome"><L w='backHome'/></Link>
                </h4>
            </div>
        )
    }
};

export default Location;