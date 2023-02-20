import * as Val from '../constants/Values'

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
}

export default new ProductService();