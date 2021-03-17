import './App.scss';
import LocationList from './components/LocationList';
import Header from './components/Header';



function App() {
  
  return (
    <div className="App">
      <Header />
      <main>
        <div className="wrapper">
          <LocationList />
        </div>
      </main>
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

//// >. Come up with DESIGN
//// 5. Add SCSS stylesheet?
// 6. Style
  //// >. Get fonts
  //// >. Get colors
  //// >. Change title and favicon
  // 6a. Style header
  // 6b. Style Card
  // 6c. Style List
  // 6d. Style general app
//// 7. Implement infinite scroll
  //// 7a. move API call into a custom hook
  //// 7b. change the endpoint to accept a page# variable
  //// 7c. create state for page number and hasNext (?) - OR can I use the link that's in the json??
  //// 7d. run an API call when user scrolls
  // 7e. Add Scroll to top

// BONUS
// 8. Query video API and display the list of videos on the page (make them playable)
  // 8a. Use Router
// 9. Create map pin functionality
