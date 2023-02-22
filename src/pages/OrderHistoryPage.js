import React from "react";
import '../styles/OrderHistory.css'; 
import OrderHistoryController from "../controllers/OrderHistoryController";
import OrderHistory from "../components/OrderHistory";
import L from "../words/L";
import * as Val from '../constants/Values'

const OrderHistoryPage = () => {
    const tg = window.Telegram.WebApp
    const user = tg.initDataUnsafe?.user
    tg.BackButton.show()
    let id = user.id  
    let lang = localStorage.getItem(Val.LANG)

    const [isHistoryCleaned, setIsHistoryCleaned] = React.useState(false)
    const [orderedProducts, setOrderedProducts] = React.useState([])

    React.useEffect(()=>{
        getOrderedProducts()
    },[])

    if(isHistoryCleaned){
        OrderHistoryController.cleanHistory(id)
        return (
            <div className="order-history">
                <div className="btn btn-primary clean-history-button"
                onClick={cleanHistory}><L w='clean'/></div>
            </div>
        )
    }

    async function getOrderedProducts(){
        let orderedProductList = await OrderHistoryController.getOrderHistoryByUserId(id, lang)
        setOrderedProducts({...orderedProductList})
    } 

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