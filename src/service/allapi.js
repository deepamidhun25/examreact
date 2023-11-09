import { commonReq } from "./commonReg";
import BASEURL from "./baseurl";

//login Api
export const loginApi=async(body)=>{
    console.log(body);
    return await commonReq("POST",`${BASEURL}/login`,body)
}