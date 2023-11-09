import axios from "axios";

export const commonReq=(method,url,body)=>{
    let config={
        method,
        url,
        headers:{'Accept':'application/json'},
        data:body
    }

   return axios(config).then(response=>{
        console.log(response);
        return response
    }).catch(err=>{
        return err
    })
}