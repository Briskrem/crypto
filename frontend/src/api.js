import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3002";
// axios.defaults.withCredentials = true;

export class CryptoApi{

    static async getTicker(endpoint='SOL'){
        console.log(endpoint,'inside crypto api IN FRONTEND')
        const url = `${BASE_URL}/crypto/ticker/${endpoint}`
        const method = 'GET'
        try{
            console.log('now making request')
            const resp = await axios({url, method})
            console.log(resp, 'AKUMENNATATA')
            return resp
        }catch(e){
            console.log('weed FRONTEND')
            console.log(e)
        }
    }

    static async getStats(endpoint, data={timeframe:'1Day'}, method='GET'){
        console.log(endpoint,data,'inside get stats for bars')
        
        const url = `${BASE_URL}/crypto/stats/${endpoint}`;
        
        const params = (method == 'GET') ? data : {}
        
        try{
            const resp = await axios({url, method, params, data})
            // console.log(resp, 'PICTURE PERFECT')
            return resp
        }catch(e){
            console.log(e)
        }
    }
}