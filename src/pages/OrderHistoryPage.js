import React, {useState} from "react";
import { useGeolocated } from "react-geolocated";
import LocationController from "../controllers/LocationController";
import { Link } from 'react-router-dom';
import {useTelegram} from "../hooks/useTelegram";
import '../styles/OrderHistory.css';
import OrderHistoryController from "../controllers/OrderHistoryController";
import OrderHistory from "../components/OrderHistory";

const OrderHistoryPage = () => {
    //const {user} = useTelegram()
    //let id = user.id

    const [isHistoryCleaned, setIsHistoryCleaned] = useState(false)
    if(isHistoryCleaned){
        OrderHistoryController.cleanHistory(1)
        return (
            <div className="order-history">
                <div className="btn btn-primary clean-history-button"
                onClick={setIsHistoryCleaned}>Tozalash</div>
            </div>
        )
    }
    let orderedProducts = OrderHistoryController.getOrderHistoryByUserId(1)
    let itemComponents = orderedProducts.map(item => {
        return <OrderHistory order = {item} key={item.id}/>
    })

    function cleanHistory(){
        setIsHistoryCleaned(true)
    }

    return (
        <div className="order-history">
            <div className="btn btn-primary clean-history-button"
            onClick={setIsHistoryCleaned}>Tozalash</div>
            {itemComponents}
        </div>
    )
};

export default OrderHistoryPage;