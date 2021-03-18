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

  useEffect(() => {
    console.log(data);
  }, [isLoading])

  console.log(data[0]);

  // const thumbnails = data.map(item => {
  //   return (
  //     <img src={item.thumbnail} alt=""/>
  //   )
  // })


  return (
    <div>
      {!data ?
        <p>Hold on...</p>
        :
        <VideoPlayer data={data} />
      } 
    </div>
  )
}

export default VideosPage;