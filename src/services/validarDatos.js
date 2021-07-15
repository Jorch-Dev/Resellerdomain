import React from 'react'

export const validarDatos = () => {
    let url = urlAPI + "v1/domains/purchase/validate";
    let key = "sso-key 3mM44UbgnMuqrP_QkBULjFqqBdTu3oCpRZJ7z:24GW17xnmuCesfrhqQdipv"
    let accept = "*/*"

    console.log(url)
    try {
        const result = await Axios({
            method : 'post',
            url : url,
            headers: { 
                'Authorization': `${key}`,
                'Content-Type': 'application/json',
                'accept': `${accept}`
            }
        });
        const data = result.data
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
