import {useState, useEffect } from 'react';
import useFetchData from '../hooks/useFetchData';
import VideoPlayer from '../components/VideoPlayer';


const VideosPage = () => {
  const [currentVid, setCurrentVid] = useState({});
  const {
    data,
    isLoading,
    fetchData
  } = useFetchData()

  useEffect(() => {
    fetchData(0, 'video');
  }, [])

  console.log(data[0]);

  // const thumbnails = data.map(item => {
  //   return (
  //     <img src={item.thumbnail} alt=""/>
  //   )
  // })


  return (
    <div>
      {isLoading ?
        <p>Hold on...</p>
        :
        <VideoPlayer data={data} />
      } 
    </div>
  )
}

export default VideosPage;
