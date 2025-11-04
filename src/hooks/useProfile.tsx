import { useEffect, useState } from 'react';
import cookies from 'js-cookie';

export const POWER_USER_EMAILS = ['vinayteja1999@gmail.com', 'demo@gmail.com'];

// Helper function to safely get user from localStorage
const getInitialUser = () => {
  if (typeof window !== 'undefined' && localStorage.getItem('user')) {
    try {
      return JSON.parse(localStorage.getItem('user') || 'null');
    } catch (error) {
      console.error('Error parsing user from localStorage:', error);
      return null;
    }
  }
  return null;
};

const useProfile = () => {
  const [isLoading, setLoading] = useState<boolean>(true);

  // Initialize user state directly from localStorage
  const [user, setUser] = useState<any | null>(getInitialUser);
  const [role, setRole] = useState<any>();

  useEffect(() => {
    // Effect now primarily sets role and loading state
    // It could potentially update user too if needed based on external events
    const currentRole = cookies.get('role');
    const currentUser = getInitialUser(); // Re-check in case it appeared after initial render

    // Update state if necessary
    if (currentUser !== user) {
      setUser(currentUser);
    }
    if (currentRole !== role) {
      setRole(currentRole);
    }

    setLoading(false);
    // Consider if dependencies are needed if user/role can change externally
  }, [role, user]); // Still run once on mount

  return {
    user, // Reference should be more stable now
    isLoading,
    role,
  };
};

export default useProfile;
