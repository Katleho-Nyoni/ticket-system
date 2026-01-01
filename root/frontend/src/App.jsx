import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/App.css';
import Navigation from './pages/Nav';
import HomePage from './pages/Home';
import AdminDashboardPage from './pages/AdminDashboard';
import LoginPage from './pages/Login';
import TicketForm from './pages/TicketForm';
import WeatherApp from './pages/WeatherApp';
import SocialMediaApp from './pages/SocialMediaApp';
import TicketSystem from './pages/TicketSystem';
import VideoShorts from './pages/VideoShorts';
import VideoShortsLoader from './loaders/VideoShortsLoader';

const routes = [{
  path: '/', element: <Navigation /> },{
  path: '/', index: true, element: <HomePage /> },{
  path: '/admin/login', element: <AdminDashboardPage /> },{
  path: 'user/login', element: <LoginPage /> },{
  path: '/log/ticket', element: <TicketForm /> },{
  path: '/weather-app', element: <WeatherApp /> },{
  path: '/social-media', element: <SocialMediaApp /> },{
  path: '/ticket-system', element: <TicketSystem /> },{
  path: '/video-shorts', loader: VideoShortsLoader , element: <VideoShorts /> }
];

const router = createBrowserRouter(routes);
function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
