
export const HOST ="https://localhost:8090"
export const BASE = "/api/v1/shop"
export const FULL = HOST + BASE
 

// Auth
export const LOGIN = FULL +  "/auth/get/sms-code" //POST body : phoneNumber, password
export const CONFIRM = FULL + "/auth/client/signin-or-signup" //POST query : confirmationCode

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

