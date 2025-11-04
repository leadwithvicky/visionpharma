import React from 'react'
import { useSignup } from './SignupContext'

const ErrorHandling = () => {
    const { error } = useSignup();
    return (
        <>
            {error && (
                <div className="md:col-span-2">
                    <p className="text-red-500 text-sm">{error}</p>
                </div>
            )}

        </>
    )
}

export default ErrorHandling
