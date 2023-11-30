import { Route, Routes } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';
import CheckAuth from './CheckAuth';

import AdminLayout from '../layouts/AdminLayout';

import Dashboard from '../pages/dashboard/Dashboard';
import SignIn from '../pages/signin/SignIn';
import Student from '../pages/student/Student';
import UnderContruction from '../components/UnderContruction';
import Course from '../pages/course/Course';
import Payment from '../pages/payment/Payment'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CheckAuth />} />
      <Route
        path="signin"
        element={
          <CheckAuth>
            <SignIn />
          </CheckAuth>
        }
      />

      <Route
        path="admin/*"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="*" element={<Dashboard />} />
        <Route path="course" element={<Course />} />
        <Route path="students" element={<Student />} />
        <Route path="payment" element={<Payment />} />
        <Route path="report" element={<UnderContruction />} />
        <Route path="settings" element={<UnderContruction />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
