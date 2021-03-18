import {useEffect, Fragment } from 'react';
import useFetchData from '../hooks/useFetchData';
import VideoPlayer from '../components/VideoPlayer';


const VideosPage = () => {
  const {
    data,
    isLoading,
    fetchData
  } = useFetchData()

  useEffect(() => {
    fetchData(0, 'video');
  }, [])

  return (
    <Fragment>
      {isLoading ?
        <p>Hold on...</p>
        :
        <VideoPlayer data={data} />
      } 
    </Fragment>
  )
}

export default VideosPage;
