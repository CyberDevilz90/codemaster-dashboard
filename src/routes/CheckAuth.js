import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const CheckAuth = x => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('access_token');

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/signin');
    } else {
      navigate('admin/dashboard');
    }
  }, []);

  return x.children;
};

export default CheckAuth;
