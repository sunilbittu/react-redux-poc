import { apiPostHelper } from './APIHelper';

const DOMAIN = 'http://b7292c4c.ngrok.io/v1.0';

export const updatePasswordPostApi = payload => {
    const URL = `${DOMAIN}/user/password/`
    const headers ={
        headers: {
            'Content-Type': 'application/json',
            'token': '1b70f123a38e4205910da8d8c43d6c3f'
        }
    }
    const response = apiPostHelper(URL, payload, headers)
    return response
}
