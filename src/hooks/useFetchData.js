import { useState } from 'react';
import axios from 'axios';



const useFetchData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(0); // tracks data page #
  const [hasMore, setHasMore] = useState(true) // tracks if more pages are available


  const fetchData = (page, query) => {
    setIsLoading(true); // loading started
    axios({
      url: `https://demo2020460.mockable.io/${query}?page=${page}`,
      method: 'GET',
      responseType: 'json'
    }).then(res => {
      // append fetched data to state
      setData(prevData => [...prevData, ...res.data[query + 's']]);
      // if there's a next page, increment page in state. If there isn't, set 'hasMore' to false
      res.data.next_page ? setPage(prevPage => prevPage + 1) : setHasMore(false)
      setIsLoading(false) // loading finished
    }).catch(error => {
      console.log(error);
      setIsLoading(false)
    })
  }

  return {data, isLoading, page, hasMore, fetchData}
}

export default useFetchData;