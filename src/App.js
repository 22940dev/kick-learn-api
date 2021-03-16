import './App.css';
import { useState, useEffect } from 'react';
import Card from './components/Card';




function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  // the API returns an object that contains a 'locations' arr and a 'next_page' property
  // 'next-page' is probably useful for pagination //! Dont forget to access it later
  // 'location' contains the info I need to display so I saved it in its own constant
  useEffect(() => {
    setIsLoading(true);
    fetch('http://demo2020460.mockable.io/location')
    .then(res => res.json())
    .then(data => {
      setData(data.locations);
      setIsLoading(false)
    })
  }, [])
  
  // creates a list of Card components that accept a location object as props. This list will be rendered on the page
  const locationList = data.map((item, i) => {
    return (
      <Card data={item} key={i}/> 
    )
  })


  return (
    <div className="App">
      {isLoading ? 
        <p>Hold on</p>
        : 
        <ul>
         {locationList}
        </ul>
      }
      
    </div>
  )
}

export default App;




//// 1. Create card component
//// 2. Create app state
//// 3. Query API and save the returned data to state (fetch)
// 4. Loop over the data and render it on the page
  // 4a. Pass the props to Card.js
  // 4b. 
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
