import {useState, useEffect } from 'react';
import useFetchData from '../hooks/useFetchData';



const VideosPage = () => {
  const [currentVid, setCurrentVid] = useState({});
  const {
    data,
    isLoading,
    hasMore,
    fetchData
  } = useFetchData()

  // useEffect(() => {
  //   fetchData(0, 'video')
  // }, [])

  console.log(data);

  return (
    <div>
      <p>I'm a video player</p>
    </div>
  )
}

export default VideosPage;