import axios from "axios";


const httpClient = axios.create({
    baseURL : (process.env.NODE_ENV === 'production') ? 'https://sos-back.onrender.com' : 'http://localhost:8080'
})

class Apiservice{
    constructor(apiurl) {
        this.apiurl = apiurl;
    }

    post(url,objeto){
        const requestUrl = `${this.apiurl}${url}`
        return httpClient.post(requestUrl,objeto)
    }

    put(url,objeto){
        const requestUrl = `${this.apiurl}${url}`
        return httpClient.put(requestUrl,objeto)
    }

    delete(url){
        const requestUrl = `${this.apiurl}${url}`
        return httpClient.delete(requestUrl)
    }

    get(url){
        const requestUrl = `${this.apiurl}${url}`
        return httpClient.get(requestUrl)
    }
}

export default Apiservice