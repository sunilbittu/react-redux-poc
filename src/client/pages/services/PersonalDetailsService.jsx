import { apiGetHelper, apiPutHelper } from './APIHelper';

const DOMAIN = 'http://b7292c4c.ngrok.io/v1.0';

export const retrivePersonalDetailsGetAPI = payload => {
    const URL = `${DOMAIN}/user/userDetails`;
    const headersAndParams ={
        params: {
            'userId': payload
        },
        headers: {
            'Content-Type': 'application/json',
            'token': '1b70f123a38e4205910da8d8c43d6c3f'
        }
    };
   

    const response = apiGetHelper(URL, headersAndParams);
    console.log("i am in res:::::"+JSON.stringify(response.data))
    return response
}

export const updatePersonalDetailsPutAPI = payload => {
  
    const URL = `${DOMAIN}/user/update`;
    const headersAndParams ={
        
        headers: {
            'Content-Type': 'multipart/form-data; boundary=AaB03x',
            'token': '1b70f123a38e4205910da8d8c43d6c3f'
        }
    };
   

    const response = apiPutHelper(URL,payload,headersAndParams);
    return response
}
