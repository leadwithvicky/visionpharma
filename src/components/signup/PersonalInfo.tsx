import React from 'react'
import { useSignup } from './SignupContext'

const PersonalInfo = () => {
    const { form, handleChange } = useSignup();
    return (
        <>
            <div className="md:col-span-2">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Personal Info</h3>
            </div>

            {/* Name */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500"
                    required
                />
            </div>

            {/* Email */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    readOnly
                    className="w-full border rounded px-4 py-3 bg-gray-100 text-gray-600"
                />
            </div>

        </>
    )
}

export default PersonalInfo
