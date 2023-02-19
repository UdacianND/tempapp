class CategoryController {
    getCategoriesByInstitutionId(id){
        return [
            {
                id:1,
                name:'Ichimliklar'
            },
            {
                id:2,
                name:'Lavash'
            },
            {
                id:3,
                name:'Burger'
            },
            {
                id:4,
                name:'Salat'
            },
            {
                id:5,
                name:'Pizza'
            },
            {
                id:6,
                name:'Norin'
            }
        ]
    }
}

export default new CategoryController();