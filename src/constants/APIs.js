//* - for bot only

export const HOST = ""
export const BASE = "/api/v1/shop"
 

// Auth
export const LOGIN = HOST + BASE +  "/auth/login" //*POST body : phoneNumber, password
export const REGISTER = HOST + BASE + "/auth/register" //*POST body : phoneNumber, password
export const CONFIRM = HOST + BASE + "/auth/confirm" //*POST query : confirmationCode

// Institutions
export const INSTITUTION_TYPE_LIST = HOST + BASE + "/institutionTypes" //GET

// Institutions
export const INSTITUTION_LIST = HOST + BASE + "/institutions/type" //GET path : typeId

//Categories
export const CATEGORY_LIST = HOST + BASE + "/categories/institution" //GET path : insId

//Products
export const PRODUCT_LIST = HOST + BASE + "/products/category" //GET path : catId 

//Order
export const ORDER_POST = HOST + BASE + "/order" //*POST path : body : order

//Order hitory
export const ORDER_HISTORY_LIST = HOST + BASE + "/order/history" //*GET 
export const ORDER_HISTORY_CLEAR = HOST + BASE + "/order/history" //*DELETE 

