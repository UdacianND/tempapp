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

    const [orderedProducts, setOrderedProducts] = React.useState({
        list:[]
    })

    React.useEffect(()=>{
        getOrderedProducts()
    },[])

    async function getOrderedProducts(){
        let orderedProductList = await OrderHistoryController.getOrderHistory()
        setOrderedProducts(pre => ({...pre, list:orderedProductList}))
    } 

    let itemComponents = orderedProducts.list.map(order => {
        let item = { 
            overallPrice : order.overallPrice,
            deliveryPrice : order.deliveryPrice,
            deliveryTime: order.deliveryTime,
            orderProducts :order.orderProducts.map(x => {
                return {
                    product: {
                        name : lang === 'uz'? x.product.nameUz : x.nameRu
                    },
                    quantity : x.quantity,
                    price : x.price
                }
            })
        }
        return <OrderHistory order = {item} key={item.id}/>
    })

    function cleanHistory(){
        OrderHistoryController.cleanHistory()
        setOrderedProducts(pre => ({...pre, list:[]}))
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