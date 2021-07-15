import Axios from 'axios'
import { urlAPI } from './urlAPI'

export  async function suggest(obj) {
    let url = urlAPI + "v1/domains/suggest";
    let key = "sso-key 3mM44UbgnMuqrP_QkBULjFqqBdTu3oCpRZJ7z:24GW17xnmuCesfrhqQdipv"
    let accept = "*/*"
    url= `${url}?query=${obj.title}&country=${obj.country}&sources=${obj.sources}&tlds=${obj.tdl}&waitMs=${obj.waitMs}`

    console.log(url)
    try {
        const result = await Axios({
            method : 'get',
            url : url,
            headers: { 
                'Authorization': `${key}`,
                'accept': `${accept}`
            }
        });
        const data = result.data
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

export  async function available(obj) {
    let url = urlAPI + "v1/domains/available";
    let key = "sso-key 3mM44UbgnMuqrP_QkBULjFqqBdTu3oCpRZJ7z:24GW17xnmuCesfrhqQdipv"
    let accept = "*/*"
    url= `${url}?domain=${obj.title}&checkType=${obj.country}&forTransfer=${obj.sources}`

    console.log(url)
    try {
        const result = await Axios({
            method : 'get',
            url : url,
            headers: { 
                'Authorization': `${key}`,
                'accept': `${accept}`
            }
        });
        const data = result.data
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}