import axios from "axios"


const SEND_OTP_MOBILE = '/api/otp'


export const sendOtp = async (mobile: String) => {

    try {
        const response = await axios.post(SEND_OTP_MOBILE, { mobile: mobile });
        return response;
    }
    catch (error) {

        return error;

    }

}