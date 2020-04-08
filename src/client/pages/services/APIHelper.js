import axios from 'axios'

export const apiPostHelper = async (URL, PAYLOAD,HEADERS) => {
    try {
        const responseData = await axios.post(URL, PAYLOAD, HEADERS);
        return responseData;
    } catch (e) {
         return e
    }
}

export const apiPostFormHelper = async (URL, PAYLOAD) => {
    try {
        const responseData = await axios.post(URL, PAYLOAD, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        return responseData
    } catch (e) {
        console.error(e)
        return e
    }
}

export const apiGetHelper = async (URL, HEADERS_PARAMS) => {
    try {
        console.log("headers::"+JSON.stringify(HEADERS_PARAMS));
        const responseData = await axios.get(URL, HEADERS_PARAMS);
        return responseData;
    } catch (e) {
        return e
    }
}

export const apiPutHelper = async (URL,DATA,HEADERS_PARAMS) => {
    try {
        let formData = new FormData();
            formData.append('userDetails', JSON.stringify(DATA.userDetails));
        console.log("headers::"+JSON.stringify(HEADERS_PARAMS));
        const responseData = await axios.put(URL,formData,HEADERS_PARAMS);
        return responseData;
    } catch (e) {
        return e
    }
}