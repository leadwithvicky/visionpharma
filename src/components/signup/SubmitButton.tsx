import React from 'react'
import { useSignup } from './SignupContext'

const SubmitButton = () => {
    const { mobileVerified } = useSignup();
    return (
        <div className="md:col-span-2">
            <button
                type="submit"
                disabled={!mobileVerified}
                className={`w-full py-3 rounded-lg text-lg font-medium transition ${mobileVerified
                    ? 'bg-violet-600 text-white hover:bg-violet-700'
                    : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                    }`}
            >
                Complete Signup
            </button>
        </div>
    )
}

export default SubmitButton
