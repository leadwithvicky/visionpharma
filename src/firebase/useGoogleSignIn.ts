// hooks/auth/useGoogleSignIn.ts
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '@/firebase2';

export const useGoogleSignIn = () => {
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      
      const user = await result?.user;


      return {
        name: user?.displayName,
        email: user?.email,
        photo: user?.photoURL,
      };
    } catch (error) {
      console.error('Google Sign-In Error:', error);
      throw error;
    }
  };

  return { signInWithGoogle };
};
