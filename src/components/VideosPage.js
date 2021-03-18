import {useEffect, Fragment } from 'react';
import useFetchData from '../hooks/useFetchData';
import VideoPlayer from '../components/VideoPlayer';
import Loader from './Loader';


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
        <Loader />
        :
        <VideoPlayer data={data} />
      } 
    </Fragment>
  )
}

export default VideosPage;
