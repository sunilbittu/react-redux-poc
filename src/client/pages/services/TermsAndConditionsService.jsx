import { apiPostHelper, apiGetHelper } from './APIHelper';

const DOMAIN = 'http://b7292c4c.ngrok.io/v1.0';

export const retriveTACGETAPI = payload => {
    const URL = `${DOMAIN}/user/contract/`
    const headers ={
        headers: {
            "Content-Type": "application/json"
        }
    }
    const response = apiGetHelper(URL, headers)
    return response
}

