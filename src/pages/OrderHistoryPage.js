import React, {useState} from "react";
import {useTelegram} from "../hooks/useTelegram";
import '../styles/OrderHistory.css';
import OrderHistoryController from "../controllers/OrderHistoryController";
import OrderHistory from "../components/OrderHistory";
import L from "../words/L";
import * as Val from '../constants/Values'

const OrderHistoryPage = () => {
    const {user, tg} = useTelegram()
    tg.BackButton.show()
    let id = user.id  
    let lang = localStorage.getItem(Val.LANG)

    const [isHistoryCleaned, setIsHistoryCleaned] = useState(false)
    if(isHistoryCleaned){
        OrderHistoryController.cleanHistory(id)
        return (
            <div className="order-history">
                <div className="btn btn-primary clean-history-button"
                onClick={cleanHistory}><L w='clean'/></div>
            </div>
        )
    }
    let orderedProducts = OrderHistoryController.getOrderHistoryByUserId(id, lang)
    let itemComponents = orderedProducts.map(item => {
        return <OrderHistory order = {item} key={item.id}/>
    })

    function cleanHistory(){
        OrderHistoryController.cleanHistory(id)
        setIsHistoryCleaned(true)
    }

    return (
        <div className="order-history">
            <div className="btn btn-primary clean-history-button"
            onClick={cleanHistory}><L w='clean'/></div>
            {itemComponents}
        </div>
    )
};

export default OrderHistoryPage;