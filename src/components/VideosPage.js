import {useState, useEffect } from 'react';
import useFetchData from '../hooks/useFetchData';
import ReactHlsPlayer from 'react-hls-player';



const VideosPage = () => {
  const [currentVid, setCurrentVid] = useState({});
  const {
    data,
    isLoading,
    fetchData
  } = useFetchData()

  useEffect(() => {
    fetchData(0, 'video')
  }, [])


  console.log(data[0].manifest_url);
  return (
    <div>
      {isLoading ?
        <p>Hold on...</p>
        :
        <ReactHlsPlayer
          url={data[0].manifest_url}
          autoplay={false}
          controls="true"
          width="100%"
          height="auto"
        />
      }
    </div>
  )
}

export default VideosPage;

{/*  */}