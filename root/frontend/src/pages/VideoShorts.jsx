import { useEffect, useState } from 'react';
import { TransparentNav } from './Nav';

export default function VideoShortsApp(){
 const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/API/video');
        const results = await response.json();
        setData(results);
        console.log(results);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  },[]);

  return (
    <>
      <div className='w-screen h-screen bg-[url(/src/assets/video.webp)] bg-center bg-cover bg-no-repeat'>
        <TransparentNav />
            <div className=' flex flex-col gap-4'>
                <h1 className='font-extrabold text-5xl m-10'>Video Shorts</h1>
                {/* {error && <p className='text-red-600'>{error}</p>} */}
                {/* <div className='grid grid-cols-3 gap-10'>
                    {data.map((video) => (
                        <div key={video.id} >
                        <video src={video.video_url} height={350} 
                        width={350} poster={video.thumbnail} controls
                        className='rounded-t-xl' />
                        <h2 className='font-bold mt-2'>{video.name} </h2>
                        </div>
                    ))}
                </div> */}
            </div>
      </div>
    </>
  )
}