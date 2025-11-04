import CryptoJS from 'crypto-js';

// Use a secret key for encryption (in production, store this securely, e.g., in environment variables)
const SECRET_KEY = process.env.NEXT_PUBLIC_ENCRYPTION_KEY || 'default-secret-key-change-in-production';

export const encryptData = (data: any): string => {
  const jsonString = JSON.stringify(data);
  return CryptoJS.AES.encrypt(jsonString, SECRET_KEY).toString();
};

export const decryptData = (token: string): any => {
  try {
    const bytes = CryptoJS.AES.decrypt(token, SECRET_KEY);
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    if (!decryptedData) {
      throw new Error('Decryption failed');
    }
    return JSON.parse(decryptedData);
  } catch (error) {
    throw new Error('Invalid or corrupted token');
  }
};
