import { CreateBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navigation from './pages/Nav';
import HomePage from './pages/Home';
import AdminDashboardPage from './pages/AdminDashboard';
import LoginPage from './pages/Login';

const routes = [{
  path: '/',
  element: <Navigation />,
  children: [{
    path: '/',
    element: <HomePage />
  },{
    path: '/admin/login',
    element: <AdminDashboardPage />
  },{
    path: 'user/login',
    element: <LoginPage />
  }]
}];

const router = CreateBrowserRouter(routes);
function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
