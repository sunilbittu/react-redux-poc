import { apiPostHelper, apiGetHelper } from './APIHelper';

const DOMAIN = 'http://b7292c4c.ngrok.io/v1.0';

export const fetchFlightInfoGetAPI = payload => {
    const URL = `${DOMAIN}/flight/stats`
    console.log("dep state::::",JSON.stringify(payload));
    const headers ={
        params: {
            "depDate": payload.deptDate,
            "airLineCode": payload.flightNumber
        },
        headers: {
            "Content-Type": "application/json",
              "token": "1b70f123a38e4205910da8d8c43d6c3f" ,
        }
    }
    const response = apiGetHelper(URL, headers);
    console.log(response)
    return response
}

