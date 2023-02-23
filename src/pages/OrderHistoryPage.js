import React from "react";
import '../styles/OrderHistory.css'; 
import OrderHistoryController from "../controllers/OrderHistoryController";
import OrderHistory from "../components/OrderHistory";
import L from "../words/L";
import * as Val from '../constants/Values'

const OrderHistoryPage = () => {
    const tg = window.Telegram.WebApp
    tg.BackButton.show()
    let lang = localStorage.getItem(Val.LANG)

    const [isHistoryCleaned, setIsHistoryCleaned] = React.useState(false)
    const [orderedProducts, setOrderedProducts] = React.useState({
        list:[]
    })

    React.useEffect(()=>{
        getOrderedProducts()
    },[])

    if(isHistoryCleaned){
        OrderHistoryController.cleanHistory()
        return (
            <div className="order-history">
                <div className="btn btn-primary clean-history-button"
                onClick={cleanHistory}><L w='clean'/></div>
            </div>
        )
    }

    async function getOrderedProducts(){
        let orderedProductList = await OrderHistoryController.getOrderHistory(lang)
        setOrderedProducts(pre => ({...pre, list:orderedProductList}))
    } 

    let itemComponents = orderedProducts.list.map(item => {
        return <OrderHistory order = {item} key={item.id}/>
    })

    function cleanHistory(){
        OrderHistoryController.cleanHistory()
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