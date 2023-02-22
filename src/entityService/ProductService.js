import * as Val from '../constants/Values'
import Words from "../words/Words";
import L from "../words/L";
const tg = window.Telegram.WebApp;


class ProductService {
    products 

    getOrderedProducts(){
        let orders = []
        this.products = this.getProducts()
        for(const prop in this.products){
            console.log(this.products[prop])
            orders.push({
                id : this.products[prop].id,
                name : this.products[prop].name,
                count : this.products[prop].count,
                price : this.products[prop].price
            })
        }
        return orders;
    }

    getProducts(){
        this.products = JSON.parse(localStorage.getItem(Val.PRODUCTS))
        if(this.products == null)
            this.products = {}
        return this.products
    }

    getById(id){
        this.products = this.getProducts()
        return this.products[id]
    }

    saveProduct(product){
        this.products = this.getProducts()
        if(product.count === 0)
            delete this.products[product.id]
        else{
            if(this.products[product.id] == null){
                this.products[product.id] = {
                    count : product.count,
                    price : product.price,
                    name : product.name,
                    imageUrl:product.imageUrl
                }
            }else{
                this.products[product.id].count = product.count
            }
        }
        this.save(this.products)
        this.setTotalPriceOnMenuButton()
    }

    save(data){
        localStorage.setItem(Val.PRODUCTS, JSON.stringify(data))
    }

    hasAnyOrder(){
        let productList =  this.getProducts()
        return Object.keys(productList).length !==0
    }

    clearOrderPackage(){
        this.products = {}
        localStorage.removeItem(Val.PRODUCTS)
    }
 
    setTotalPriceOnMenuButton(){
        let lang = localStorage.getItem(Val.LANG)  
        let data = Words.data

        const productsList = this.getOrderedProducts()
        let totalPrice = productsList.length === 0 ? 0 : productsList.map(x=> x.price * x.count)
        .reduce((total, current) => total + current)
        if(totalPrice === 0){
            tg.MainButton.hide()
        }else{
            tg.MainButton.setParams({
                text: data['order'][lang] +' : '+ totalPrice 
            })
            tg.MainButton.show()
        }
    }

    getDeliveryProducts(){
        let orders = []
        this.products = this.getProducts()
        for(const prop in this.products){
            console.log(this.products[prop])
            orders.push({
                id : this.products[prop].id,
                count : this.products[prop].count,
            })
        }
        return orders;
    }
}

export default new ProductService();