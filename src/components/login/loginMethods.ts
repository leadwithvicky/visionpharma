import axios from "axios";


export const loginWithEmailPassword = async (email: String, password: String) => {
    const API = '/api/auth/login';

    try {
        const response = await axios.post(API, { email : email.toLowerCase(), password });
        return response.data;

    }
    catch (error: any) {
        console.log(error);
        throw new Error(error.response?.data?.error || 'Login failed.');
    }

}

export const loginWithGoogle = async (email: String) => {
    const API = '/api/auth/login';
    try {
        const response = await axios.post(API, { email: email, byGoogle: true });
        return response.data;
    }
    catch (error: any) {
        console.log(error);
        throw new Error(error.response?.data?.error || 'Google login failed.');
    }

}
