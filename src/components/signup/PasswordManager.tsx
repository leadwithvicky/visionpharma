// 'use client';

// import React, { useState } from 'react';
// import { Eye, EyeOff } from 'lucide-react';
// import { useSignup } from './SignupContext';

// const PasswordManager = () => {
//   const { form, handleChange } = useSignup();

//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirm, setShowConfirm] = useState(false);

//   const toggleVisibility = () => setShowPassword((prev) => !prev);
//   const toggleConfirmVisibility = () => setShowConfirm((prev) => !prev);

//   const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setPassword(value);

//     if (confirmPassword && value === confirmPassword) {
//       handleChange({ target: { name: 'password', value } });
//     }
//   };

//   const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setConfirmPassword(value);

//     if (password && value === password) {
//       handleChange({ target: { name: 'password', value } });
//     }
//   };

//   const passwordMismatch = password && confirmPassword && password !== confirmPassword;

//   return (
//     <>
//       <div className="md:col-span-2 relative mb-4">
//         <label className="block text-sm font-medium text-gray-700 mb-1">Set Password *</label>
//         <input
//           type={showPassword ? 'text' : 'password'}
//           name="local-password"
//           value={password}
//           onChange={handlePasswordChange}
//           className="w-full border rounded px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-violet-500"
//           required
//         />
//         <div
//           className="absolute top-9 right-4 cursor-pointer text-gray-500 hover:text-gray-700"
//           onClick={toggleVisibility}
//         >
//           {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//         </div>
//       </div>

//       <div className="md:col-span-2 relative">
//         <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password *</label>
//         <input
//           type={showConfirm ? 'text' : 'password'}
//           name="confirm-password"
//           value={confirmPassword}
//           onChange={handleConfirmPasswordChange}
//           className={`w-full border rounded px-4 py-3 pr-12 focus:outline-none focus:ring-2 ${
//             passwordMismatch ? 'border-red-500 focus:ring-red-500' : 'focus:ring-violet-500'
//           }`}
//           required
//         />
//         <div
//           className="absolute top-9 right-4 cursor-pointer text-gray-500 hover:text-gray-700"
//           onClick={toggleConfirmVisibility}
//         >
//           {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
//         </div>
//         {passwordMismatch && (
//           <p className="text-sm text-red-500 mt-1">Passwords do not match</p>
//         )}
//       </div>
//     </>
//   );
// };

// export default PasswordManager;

'use client';

import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useSignup } from './SignupContext';

const PasswordManager = () => {
  const { form, handleChange } = useSignup();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const toggleVisibility = () => setShowPassword((prev) => !prev);
  const toggleConfirmVisibility = () => setShowConfirm((prev) => !prev);

  const passwordMismatch = form.password && form.confirmPassword && form.password !== form.confirmPassword;

  return (
    <>
      <div className="md:col-span-2 relative mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Set Password *</label>
        <input
          type={showPassword ? 'text' : 'password'}
          name="password"
          value={form.password}
          onChange={handleChange}
          className="w-full border rounded px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-violet-500"
          required
        />
        <div
          className="absolute top-9 right-4 cursor-pointer text-gray-500 hover:text-gray-700"
          onClick={toggleVisibility}
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </div>
      </div>

      <div className="md:col-span-2 relative">
        <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password *</label>
        <input
          type={showConfirm ? 'text' : 'password'}
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
          className={`w-full border rounded px-4 py-3 pr-12 focus:outline-none focus:ring-2 ${
            passwordMismatch ? 'border-red-500 focus:ring-red-500' : 'focus:ring-violet-500'
          }`}
          required
        />
        <div
          className="absolute top-9 right-4 cursor-pointer text-gray-500 hover:text-gray-700"
          onClick={toggleConfirmVisibility}
        >
          {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
        </div>
        {passwordMismatch && (
          <p className="text-sm text-red-500 mt-1">Passwords do not match</p>
        )}
      </div>
    </>
  );
};

export default PasswordManager;
