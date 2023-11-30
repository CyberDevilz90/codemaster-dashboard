import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ProtectedRoute = x => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('access_token');

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/signin');
    }
  }, []);

  return x.children;
};

export default ProtectedRoute;
