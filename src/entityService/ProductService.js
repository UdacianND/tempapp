import * as Val from '../constants/Values'
const tg = window.Telegram.WebApp;

class ProductService {
    products 

    getOrderedProducts(){
        let orders = []
        if(this.products == null)
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
        if(this.products != null)
            return this.products
        this.products = JSON.parse(localStorage.getItem(Val.PRODUCTS))
        if(this.products == null)
            this.products = {}
        return this.products
    }

    getById(id){
        if(this.products == null)
            this.products = this.getProducts()
        return this.products[id]
    }

    saveProduct(product){
        this.setTotalPriceOnMenuButton()
        if(this.products == null)
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
    }

    save(data){
        localStorage.setItem(Val.PRODUCTS, JSON.stringify(data))
    }

    hasAnyOrder(){
        let productList =  this.getProducts()
        return Object.keys(productList).length !==0
    }

    clearOrderPackage(){
        localStorage.removeItem(Val.PRODUCTS)
    }

    setTotalPriceOnMenuButton(){
        const productsList = this.getOrderedProducts()
        let totalPrice = productsList.length === 0 ? 0 : productsList.map(x=> x.price * x.count)
        .reduce((total, current) => total + current)
        if(totalPrice === 0){
            tg.MenuButton.hide()
        }else{
            tg.MainButton.setParams({
                text: 'Buyutma : ' + totalPrice
            })
            tg.MenuButton.show()
        }
    }
}

export default new ProductService();