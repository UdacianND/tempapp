class OrderHistoryController{
    getOrderHistoryByUserId(id, lang){
        return [
            {
                id : 1,
                date: '10-01-2023',
                products :[
                    {
                        id: 1,
                        name: 'Coca cola',
                        count : 2,
                        price: 18000,
                        institution : 'Oqtepa lavash'
                    },
                    {
                        id: 2,
                        name: 'Lavash',
                        count : 1,
                        price: 24000,
                        institution : 'Oqtepa lavash'
                    }
                ],
                totalPrice : 42000
            },
            {
                id : 2,
                date: '10-01-2023',
                products :[
                    {
                        id: 3,
                        name: 'Coca cola',
                        count : 2,
                        price: 18000,
                        institution : 'Oqtepa lavash'
                    },
                    {
                        id: 4,
                        name: 'Lavash',
                        count : 1,
                        price: 24000,
                        institution : 'Oqtepa lavash'
                    }
                ],
                totalPrice : 42000
            },
            {
                id : 3,
                date: '10-01-2023',
                products :[
                    {
                        id: 5,
                        name: 'Coca cola',
                        count : 2,
                        price: 18000,
                        institution : 'Oqtepa lavash'
                    },
                    {
                        id: 6,
                        name: 'Lavash',
                        count : 1,
                        price: 24000,
                        institution : 'Oqtepa lavash'
                    }
                ],
                totalPrice : 42000
            },
            {
                id : 4,
                date: '10-01-2023',
                products :[
                    {
                        id: 7,
                        name: 'Coca cola',
                        count : 2,
                        price: 18000,
                        institution : 'Oqtepa lavash'
                    },
                    {
                        id: 8,
                        name: 'Lavash',
                        count : 1,
                        price: 24000,
                        institution : 'Oqtepa lavash'
                    }
                ],
                totalPrice : 42000
            },
            {
                id : 5,
                date: '10-01-2023',
                products :[
                    {
                        id: 9,
                        name: 'Coca cola',
                        count : 2,
                        price: 18000,
                        institution : 'Oqtepa lavash'
                    },
                    {
                        id: 10,
                        name: 'Lavash',
                        count : 1,
                        price: 24000,
                        institution : 'Oqtepa lavash'
                    }
                ],
                totalPrice : 42000
            }
        ]
    }

    cleanHistory(id){
        
    }
}

export default new OrderHistoryController()