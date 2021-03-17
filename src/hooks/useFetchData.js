import { useState } from 'react';
import axios from 'axios';



const useFetchData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true)


  const fetchData = (page, query) => {
    setIsLoading(true);
    axios({
      url: `http://demo2020460.mockable.io/${query}?page=${page}`,
      method: 'GET',
      responseType: 'json'
    }).then(res => {
      // append fetched data to state
      setData(prevData => [...prevData, ...res.data[query + 's']]);
      // if there's a next page, increment page in state. If there isn't, turn off hasMore flag
      res.data.next_page ? setPage(prevPage => prevPage + 1) : setHasMore(false)
      setIsLoading(false)
    }).catch(error => console.log(error))
  }

  return {data, isLoading, page, hasMore, fetchData}
}

export default useFetchData;