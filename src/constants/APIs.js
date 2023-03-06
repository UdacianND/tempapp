
export const HOST ="https://5222-37-110-210-78.ap.ngrok.io"
export const BASE = "/api/v1/shop"
export const FULL = HOST + BASE
 

// Auth
export const LOGIN = FULL +  "/auth/get/sms-code" //POST body : phoneNumber, password
export const CONFIRM = FULL + "/auth/client/signin-or-signup" //POST query : confirmationCode

// Institutions
export const INSTITUTION_TYPE_LIST = FULL + "/institutionType" //GET

// Institutions
export const INSTITUTION_LIST = FULL + "/institution/all/by_type" //GET path : typeId

//Categories
export const CATEGORY_LIST = FULL + "/category/institution" //GET path : insId

//Products
export const PRODUCT_LIST = FULL + "/product/category" //GET path : catId 

//Order
export const ORDER_POST = FULL + "/order/add" //POST path : body : order

//Order hitory
export const ORDER_HISTORY_LIST = FULL + "/client/my-orders" //GET 
export const ORDER_HISTORY_CLEAR = FULL + "/order/history" //DELETE 

