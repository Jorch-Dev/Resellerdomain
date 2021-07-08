import Axios from 'axios'
import { urlAPI } from './urlAPI'

export default async function buyDomain() {
    let url = urlAPI + "v1/domains/suggest";
    let urlCloud = urlAPI
    let formData = new FormData();
    // formData.append("file", obj.image[0]);
    formData.append("upload_preset", `plantilla-afiliado`);

         await Axios.post(urlCloud, formData)
            .then(response => {
                    Axios.post(url, {
                        "query": '',
                        "country": '',
                        "sources": '',
                        "tlds": '',
                        "waitMs": ''
                    }).then(response => {             
                    })
                    .catch(function (error)  {
                    })
                    
            })
            .catch(error => {
                console.log("Error: " + error)
            })
}