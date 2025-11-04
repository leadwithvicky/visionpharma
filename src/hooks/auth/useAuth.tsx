import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const useAuth = () => {
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    const token = Cookies.get('token');
    setToken(token || '');
  }, [token]);

  return {
    token,
  };
};

export default useAuth;
