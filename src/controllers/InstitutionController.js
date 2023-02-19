class InstitutionController {

    getInstitutionsByTypeId(id){
        let url = 'https://th.bing.com/th/id/OIP.com4sMfga2gwMCziijiREAHaHa?w=178&h=180&c=7&r=0&o=5&pid=1.7'
        return [
            {
                id:1,
                name:'Evos',
                imageUrl : url
            },
            {
                id:2,
                name:'Azon kafe',
                imageUrl : url
            },
            {
                id:3,
                name:'Oqtepa lavash',
                imageUrl : url
            },
            {
                id:4,
                name:'McDonalds',
                imageUrl : url
            },
            {
                id:5,
                name:'Fast food',
                imageUrl : url
            },
            {
                id:6,
                name:'Slow food',
                imageUrl : url
            },
            {
                id:7,
                name:'Mini food',
                imageUrl : url
            },
            {
                id:8,
                name:'Eco food',
                imageUrl : url
            },
            {
                id:9,
                name:'Prosta food',
                imageUrl : url
            },            
            {
                id:10,
                name:'Barcha food',
                imageUrl : url
            }
        ]
    }
}

export default new InstitutionController();