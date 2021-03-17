import Card from './Card';
import useFetchData from '../hooks/useFetchData';
import {useEffect} from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';



const Locations = () => {
  const [
    data,
    isLoading,
    page,
    hasMore,
    fetchData
  ] = useFetchData()



  // the API returns an object that contains a 'locations' (arr) and a 'next_page'(str)
  useEffect(() => {
    fetchData(page)
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
      next={() => fetchData(page)}
      hasMore={hasMore}
      loader={<p>Hold On</p>}
    >
      <ul>
        {locationList}
      </ul>
    </InfiniteScroll>
    
  )
}

export default Locations;