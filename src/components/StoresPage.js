import Card from './Card';
import useFetchData from '../hooks/useFetchData';
import { useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';



const StoresPage = () => {
  const [
    data,
    page,
    isLoading,
    hasMore,
    fetchData
  ] = useFetchData()



  // the API returns an object that contains a 'locations' (arr) and a 'next_page'(str)
  useEffect(() => {
    fetchData(page, 'location')
  }, [])


  // creates a list of Card components that accept a location object as props. This list will be rendered on the page
  const locationList = data.map((item, i) => {
    return (
      <Card data={item} key={i}/> 
    )
  })

  return (
    <InfiniteScroll
      dataLength={data.length}
      next={() => fetchData(page, 'location')}
      hasMore={hasMore}
      loader={<p>Hold On</p>}
      className='scroll'
    >
      <ul>
        {locationList}
      </ul>
    </InfiniteScroll>
    
  )
}

export default StoresPage;