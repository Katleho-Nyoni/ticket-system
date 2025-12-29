import { Link } from 'react-router-dom';
import social from '../assets/social.webp';


export default function HomePage() {

  return (
    <>
      <div className="h-screen w-screen flex flex-col gap-10 items-center justify-center">
        <section className="flex items-center justify-center" >
          <img src={social} alt="Phone taking a video" className='h-auto w-screen -z-1 opacity-70'  />
          <h1 className='absolute top-1 font-bold text-5xl mt-4 text-indigo-900'>An App of Apps</h1>
          <h3 className='absolute top-1 font-bold text-xl mt-18 text-indigo-700'>Explore an App</h3>
          <div className="absolute top-1 grid grid-cols-2 justify-evenly p-10 mt-22 ">
            <div className="home-container bg-linear-to-r from-blue-700/60 to-red-600/60 rounded-tl-xl">
              <Link className=' app-heading-link'
              to='/weather-app' >Weather App</Link>
              <Link to='/weather-app' className='btn-link'> 
                <button className='btn '>Visit App</button> 
              </Link>
            </div>
            <div className="home-container bg-linear-to-r from-red-600/60 to-green-700/60 rounded-tr-xl">
              <Link className=' app-heading-link' 
              to='/ticket-system'>Ticket Management System</Link>
              <Link to='/ticket-system' className='btn-link'> 
                <button className='btn ' >Visit App</button> 
              </Link>
            </div>
            <div className="home-container bg-linear-to-r from-fuchsia-800/60 to-red-600/60 rounded-bl-xl">
              <Link className=' app-heading-link' 
              to='/video-shorts'>Video Shorts App</Link>
              <Link to='/video-shorts' className='btn-link'> 
                <button className='btn '>Visit App</button> 
              </Link>
            </div>
            <div className="home-container bg-linear-to-r from-red-600/60 to-yellow-400/60 rounded-br-xl">
              <Link className=' app-heading-link' 
              to='/social-media'>Social Media App</Link>
              <Link to='/social-media' className='btn-link'> 
                <button className='btn '>Visit App</button> 
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
