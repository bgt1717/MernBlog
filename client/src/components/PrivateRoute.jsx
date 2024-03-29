import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);
  // if the currentUser is true, return children which is dashboard <Dashboard/> : <SignIn />, see App.jsx for it to make more sense. 
  return currentUser ? <Outlet /> : <Navigate to='/sign-in' />;
}