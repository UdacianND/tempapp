class InstitutionTypesController {
    getAllInstitutionTypes(lang){
        return [
            {
                id:1,
                name:'Cafe'
            },
            {
                id:2,
                name:'Restoran'
            },
            {
                id:3,
                name:'Dorixona'
            },
            {
                id:4,
                name:'Kutubxona'
            },
            {
                id:5,
                name:'Butik'
            }
        ]
    }
}

export default new InstitutionTypesController();