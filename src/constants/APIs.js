export const BASE = "/api/v1/shop/"
export const BASE_BOT = ""

// Auth
export const CHECK_USER_AUTH = "/api/bot/users/isAuthenticated/user/{1}" //{chatId}
export const LOGIN = "/api/bot/users/login" //body
export const REGISTER = "/api/bot/users/register" //body
export const CONFIRM = "/api/bot/users/register" //query

// Institutions
export const INSTITUTIONS_LIST = "/institutions"

//Categories
export const CATEGORIES_LIST = "/institutions/" //id

//Products
export const PRODUCT_LIST = "/category/id/products"

//Order
export const ORDER_POST = "/order" //body

