import axios from 'axios';
// import AlertService from './AlertService';
// Add request interceptor
// Add response interceptor
axios.interceptors.response.use(
    (response) => {
        const { config } = response;
        const { method } = config;
        return response;
    },
    (error) => {
        const { config } = error.response;
        const { method } = config;
        return Promise.reject(error);
    }
);
const axiosConfig = {
    headers: {
        'Content-Type': 'application/json'
    }
};
const axiosWrapper = async (method, url, data, token, isFormData = false, responseType = 'json', showToast = false) => {

    try {
        const config = {
            method,
            url,
            ...axiosConfig,
            responseType
        };
        if (token) config.headers['Authorization'] = `Bearer ${token}`;
        if (isFormData) {
            config.headers['Content-Type'] = 'multipart/form-data';
            config.data = data;
        } else {
            config.headers['Content-Type'] = 'application/json';
            if (data) config.data = data;
        }
        const response = await axios(config);
        // if ((response.data.message || response.message) && showToast)
        //     AlertService.toastPrompt(response.data.message || response.message,)
        return response.data ? response.data : response;
    } catch (error) {
            console.log(error.response.data)
            let msg = error.response.data.message || error .message || 'Someting went wrong'
            // if (msg && showToast)
            // AlertService.toastPrompt("Error",error?.response?.data?.details,'error','top')
        throw new Error(msg)
    }
};
export default axiosWrapper;


