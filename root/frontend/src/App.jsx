import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Navigation from './pages/Nav';
import HomePage from './pages/Home';
import AdminDashboardPage from './pages/AdminDashboard';
import LoginPage from './pages/Login';
import TicketForm from './pages/TicketForm';

const routes = [{
  path: '/',
  element: <Navigation />
  },{
  path: '/',
  element: <HomePage />
  },{
    path: '/admin/login',
    element: <AdminDashboardPage />
  },{
    path: 'user/login',
    element: <LoginPage />
  },{
    path: '/log/ticket',
    element: <TicketForm />
}];

const router = createBrowserRouter(routes);
function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
