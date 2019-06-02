/**
 * A helper for Axios
 */

import axios from 'axios'
import { API_URL } from '../config/api_paths';

const client = axios.create({
    baseURL: API_URL

});

const request = function (options) {

    const onSuccess = (response) => {
        console.debug('Request Successful!', response);
        return response.data;
    }

    const onError = (error) => {
        console.error('Request Failed:', error.config);

        if (error.response) {
            // Request was made but server responded with something thats not 2XX
            console.error('Status:', error.response.status);
            console.error('Data:', error.response.data);
            console.error('Headers:', error.response.headers);

        } else {
            // Something else happened while setting up the request
            console.error('Error Message:', error.message);
        }

        return Promise.reject(error.response || error.message);
    }

    return client(options)
        .then(onSuccess)
        .catch(onError);
}

export default request;