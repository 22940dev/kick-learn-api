import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

import LocationList from './components/LocationList';




function App() {
  //TODO refactor state?
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  // the API returns an object that contains a 'locations' arr and a 'next_page' property
  // 'next-page' is probably useful for pagination //! Dont forget to access it later
  // 'location' contains the info I need to display 
  useEffect(() => {
    setIsLoading(true);
    axios({
      url: 'http://demo2020460.mockable.io/location',
      method: 'GET',
      responseType: 'json'
    }).then(res => {
      setData(res.data.locations);
      setIsLoading(false)
    }).catch(error => console.log(error))
  }, [])

  console.log(data)

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
// 7a. Add Scroll to top

// BONUS
// 8. Query video API and display the list of videos on the page (make them playable)
  // 8a. Use Router
// 9. Create map pin functionality
