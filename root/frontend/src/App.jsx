import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/App.css';
import Navigation from './pages/Nav';
import HomePage from './pages/Home';
import AdminDashboardPage from './pages/AdminDashboard';
import SignInPage from './pages/signIn';
import TicketForm from './pages/TicketForm';
import WeatherApp from './pages/WeatherApp';
import SocialMediaApp from './pages/SocialMediaApp';
import LayOut from './pages/TicketSystem';
import VideoShorts from './pages/VideoShorts';
import VideoShortsLoader from './loaders/VideoShortsLoader';

const routes = [{
  path: '/', element: <HomePage /> },{
  path: 'user/login', element: <SignInPage /> },{
  path: '/weather-app', element: <WeatherApp /> },{
  path: '/social-media', element: <SocialMediaApp /> },{
  path: '/video-shorts' , element: <VideoShorts />, hydrateFallback: VideoShortsLoader },{
  path: '/ticket-system', element: <LayOut />,
  children: [{
  path: 'admin/login', element: <AdminDashboardPage /> },{
  path: 'log/ticket', element: <TicketForm /> }
  ]
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
