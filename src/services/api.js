import axios from 'axios';

const API_URI = 'https://gmail-server-2jvh.onrender.com';

const API_GMAIL = async (serviceUrlObject, requestData = {}, type) => {


    return await axios({
        method: serviceUrlObject.method,
        url: `${API_URI}/${serviceUrlObject.endpoint}/${type}`,
        data: requestData
    })
}

export default API_GMAIL;