
export const HOST ="https://tempapp-backend.herokuapp.com"
export const BASE = "/api"
export const FULL = HOST + BASE
 

// Auth
export const LOGIN = FULL +  "/auth/login" //POST body : phoneNumber, password
export const REGISTER = FULL + "/auth/register" //POST body : phoneNumber, password
export const CONFIRM = FULL + "/auth/confirm" //POST query : confirmationCode

// Institutions
export const INSTITUTION_TYPE_LIST = FULL + "/institutionTypes" //GET

// Institutions
export const INSTITUTION_LIST = FULL + "/institutions/type" //GET path : typeId

//Categories
export const CATEGORY_LIST = FULL + "/categories/institution" //GET path : insId

//Products
export const PRODUCT_LIST = FULL + "/products/category" //GET path : catId 

//Order
export const ORDER_POST = FULL + "/order" //POST path : body : order

//Order hitory
export const ORDER_HISTORY_LIST = FULL + "/order/history" //GET 
export const ORDER_HISTORY_CLEAR = FULL + "/order/history" //DELETE 

