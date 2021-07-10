import Axios from 'axios'
import { urlAPI } from './urlAPI'

export default async function buyDomain(obj) {
    let url = urlAPI + "v1/domains/suggest";
    let key = "3mM44UbgnMuqrP_QkBULjFqqBdTu3oCpRZJ7z:24GW17xnmuCesfrhqQdipv"
    let accept = "*/*"
    url= `${url}?query=${obj.title}&country=${obj.country}&sources=${obj.sources}&tlds=${obj.tdl}&waitMs=${obj.waitMs}`

    console.log(url)

    const result = await Axios.get(url,{ headers: { Authorization: `sso-key ${key}`} })
    const data = result.data
    console.log(data)
}