import { apiPostHelper } from './APIHelper';

const DOMAIN = 'http://e10d16f0.ngrok.io/v1.0';

export const retriveLoginUser = payload => {
    console.log(JSON.stringify(payload))
    const URL = `${DOMAIN}/auth/login`;
    const headers = {

        headers: {
            'Content-Type': 'application/json',
            'deviceId': payload.user.deviceId,
            'OSVersion': payload.user.OSVersion
        }
    };
    payload  = payload.user;

    const response = apiPostHelper(URL, payload, headers);
    return response
}

