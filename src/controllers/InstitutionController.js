import * as APIs from '../constants/APIs'
import axios from "axios";

class InstitutionController {

    async getInstitutionsByTypeId(id, lang){
        try {
            const response = await axios.get(APIs.INSTITUTION_LIST +'/'+id, 
            { params: { lang } });
            return response.data;
        } catch (err) {
            return err.response.status;
        }
    }
}

export default new InstitutionController();

        // return [
        //     {
        //         id:1,
        //         name:'Evos',
        //         imageUrl : 'https://th.bing.com/th/id/OIP.com4sMfga2gwMCziijiREAHaHa?w=178&h=180&c=7&r=0&o=5&pid=1.7'
        //     },
        //     {
        //         id:2,
        //         name:'Azon kafe',
        //         imageUrl : 'https://th.bing.com/th/id/OIP.com4sMfga2gwMCziijiREAHaHa?w=178&h=180&c=7&r=0&o=5&pid=1.7'
        //     },
        //     {
        //         id:3,
        //         name:'Oqtepa lavash',
        //         imageUrl : 'https://th.bing.com/th/id/OIP.com4sMfga2gwMCziijiREAHaHa?w=178&h=180&c=7&r=0&o=5&pid=1.7'
        //     },
        //     {
        //         id:4,
        //         name:'McDonalds',
        //         imageUrl : 'https://th.bing.com/th/id/OIP.com4sMfga2gwMCziijiREAHaHa?w=178&h=180&c=7&r=0&o=5&pid=1.7'
        //     },
        //     {
        //         id:5,
        //         name:'Fast food',
        //         imageUrl : 'https://th.bing.com/th/id/OIP.com4sMfga2gwMCziijiREAHaHa?w=178&h=180&c=7&r=0&o=5&pid=1.7'
        //     },
        //     {
        //         id:6,
        //         name:'Slow food',
        //         imageUrl : 'https://th.bing.com/th/id/OIP.com4sMfga2gwMCziijiREAHaHa?w=178&h=180&c=7&r=0&o=5&pid=1.7'
        //     },
        //     {
        //         id:7,
        //         name:'Mini food',
        //         imageUrl : 'https://th.bing.com/th/id/OIP.com4sMfga2gwMCziijiREAHaHa?w=178&h=180&c=7&r=0&o=5&pid=1.7'
        //     },
        //     {
        //         id:8,
        //         name:'Eco food',
        //         imageUrl : 'https://th.bing.com/th/id/OIP.com4sMfga2gwMCziijiREAHaHa?w=178&h=180&c=7&r=0&o=5&pid=1.7'
        //     },
        //     {
        //         id:9,
        //         name:'Prosta food',
        //         imageUrl : 'https://th.bing.com/th/id/OIP.com4sMfga2gwMCziijiREAHaHa?w=178&h=180&c=7&r=0&o=5&pid=1.7'
        //     },            
        //     {
        //         id:10,
        //         name:'Barcha food',
        //         imageUrl : 'https://th.bing.com/th/id/OIP.com4sMfga2gwMCziijiREAHaHa?w=178&h=180&c=7&r=0&o=5&pid=1.7'
        //     }
        // ]