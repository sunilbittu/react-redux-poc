import { apiPostHelper } from './APIHelper';

const DOMAIN = 'http://b7292c4c.ngrok.io/v1.0';

export const saveSignUpPostApi = payload => {
    const URL = `${DOMAIN}/user/register/`
    const headers ={
        headers: {
            "Content-Type": "application/json",
                "deviceId": "null",
                "OSVersion":"null"
        }
    }
    const response = apiPostHelper(URL, payload, headers)
    return response
}

