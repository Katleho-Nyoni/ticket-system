import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/App.css';
import Navigation from './pages/Nav';
import HomePage from './pages/Home';
import AdminDashboardPage from './pages/AdminDashboard';
import SignInPage from './pages/signIn';
import TicketForm from './pages/TicketForm';
import  ticketFormAction from './utils/TicketFormAction';
import WeatherApp from './pages/WeatherApp';
import TicketSystem from './pages/TicketSystem';
import SocialMediaApp from './pages/SocialMediaApp';
import LayOut from './Layout';
import VideoShorts from './pages/VideoShorts';
import VideoShortsLoader from './loaders/VideoShortsLoader';
import UserProfilePage from './pages/userProfile';
import VideoShortsById from './pages/VideoShortsById';
import NotFoundPage from './pages/NotFound';
import { fetchTickets } from './pages/AdminDashboard';
import { PrivateRoute } from './auth/PrivateRoute';

const routes = [{
  path: '/user/login', element: <SignInPage /> },{
  element: (<PrivateRoute />),
  children:[{
  path: '/', element: <HomePage />, errorElement: <NotFoundPage /> },{
  path: 'weather-app', element: <WeatherApp /> },{
  path: 'social-media', element: <SocialMediaApp /> },{
  path: 'video-shorts' , element: <VideoShorts />, HydrateFallbackElement: VideoShortsLoader },{
  path: 'video-shorts/:id', element: <VideoShortsById /> },{
  path: 'ticket-system', element: <LayOut />, errorElement: <NotFoundPage /> ,
    children: [{
    index: true, element: <TicketSystem /> },{
    path: 'admin/login', element: <AdminDashboardPage />, loader: fetchTickets },{
    path: 'log/ticket', element: <TicketForm />, /* action: ticketFormAction */ },{
    path: 'profile', element: <UserProfilePage />
    }]
  }]
}];

const router = createBrowserRouter(routes);

export default function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

