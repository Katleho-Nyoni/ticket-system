import { useEffect, useState } from 'react';
// import { useNavigation } from 'react-router-dom';
import { TransparentNav } from './Nav';

function VideoLoader(){
  return(
    <>
      <div className="grid grid-cols-3 gap-20 m-10 p-8">
        <div className=" video-loader">
          <div className="loading-skeleton"></div>
        </div>
        <div className=" video-loader">
          <div className="loading-skeleton"></div>
        </div>
        <div className=" video-loader">
          <div className="loading-skeleton"></div>
        </div>
        <div className=" video-loader">
          <div className="loading-skeleton"></div>
        </div>
        <div className=" video-loader">
          <div className="loading-skeleton"></div>
        </div>
        <div className=" video-loader">
          <div className="loading-skeleton"></div>
        </div>

      </div>
    </>
  );
}

function VideoShorts({videos}){

  return(
    <>
      <div className='grid grid-cols-3 gap-10'>
        {videos.map((video) => (
          <div key={video.id} >
            <video src={video.video_url} height={350} 
            width={350} poster={video.thumbnail} controls
            className='rounded-t-xl' />
            <h2 className='font-bold mt-2'>{video.name} </h2>
          </div>
        ))}
      </div>
    </>
  );
}

export default function VideoShortsApp(){
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/API/video');
        const results = await response.json();
        setData(results);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };
    fetchData();
  },[]);

    return (
   <>
      <div className='w-screen h-max-[full] bg-[url(/src/assets/video.webp)] bg-center bg-cover bg-no-repeat'>
        <TransparentNav />
            <div className=' flex flex-col gap-4 mb-6'>
                <h1 className='font-extrabold text-5xl m-10'>Video Shorts</h1>
                {error && <p className='text-red-600 text-xl'>{error}</p>}
              {isLoading ? <VideoLoader /> : <VideoShorts videos={data} />}  
            </div>
      </div>
    </>
    );
}