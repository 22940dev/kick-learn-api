import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

import LocationList from './components/LocationList';




function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true)
  
  // the API returns an object that contains a 'locations' (arr) and a 'next_page'(str)
  useEffect(() => {
    setIsLoading(true);
    axios({
      url: `http://demo2020460.mockable.io/location?page=${page}`,
      method: 'GET',
      responseType: 'json'
    }).then(res => {
      // append fetched data to state
      setData(prevData => [...prevData, ...res.data.locations]);
      // if there's a next page, increment page in state. If there isn't, turn off hasMore flag
      res.data.next_page ? setPage(prevPage => prevPage + 1) : setHasMore(false)
      setIsLoading(false)
    }).catch(error => console.log(error))
  }, [])

  console.log(page)

  return (
    <div className="App">
      <LocationList data={data} isLoading={isLoading} />
    </div>
  )
}

export default App;



//// 1. Create card component
//// 2. Create app state
//// 3. Query API and save the returned data to state (fetch)
//// 4. Loop over the data and render it on the page
  //// 4a. Pass the props to Card.js
  // 4b. Write an if sttmnt to check if the locations array is empty
  //// 4c. Create a separate locations list component
  // 4d. create a preloader
// >. ERROR HANDLING

// >. Come up with DESIGN
// 5. Add SCSS stylesheet?
// 6. Style
// 7. Implement infinite scroll
  // 7a. move API call into a custom hook
  // 7b. change the endpoint to accept a page# variable
  // 7c. create state for page number and hasNext (?) - OR can I use the link that's in the json??
  // 7d. run an API call when user scrolls
  // 7e. Add Scroll to top

// BONUS
// 8. Query video API and display the list of videos on the page (make them playable)
  // 8a. Use Router
// 9. Create map pin functionality
