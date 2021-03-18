import './App.scss';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header';
import StoresPage from './components/StoresPage';
import VideosPage from './components/VideosPage';
import ScrollToTop from 'react-scroll-to-top'; // scroll to top button



function App() {
  
  return (
    <Router basename="/">
      <div className="App">
        <ScrollToTop 
          smooth 
          color="#0098D6"
        />

        <Header />
        <main>
          <div className="wrapper">
            <Route 
              path="/" 
              exact 
              component={StoresPage} 
            />
            <Route 
              path="/videos" 
              exact 
              component={VideosPage} 
            />
          </div>
        </main>
      </div>
    </Router>
  )
}

export default App;



//// 1. Create card component
//// 2. Create app state
//// 3. Query API and save the returned data to state (fetch)
//// 4. Loop over the data and render it on the page
  //// 4a. Pass the props to Card.js
  //// 4c. Create a separate locations list component
  // 4d. create a preloader

//// >. Come up with DESIGN
//// 5. Add SCSS stylesheet?
// 6. Style
  //// >. Get fonts
  //// >. Get colors
  //// >. Change title and favicon
  //// 6a. Style header
  //// 6b. Style Card
  //// 6c. Style List
  //// 6d. Style general app
  // 6e. Responsiveness
  // 6f. Style Videos Page
//// 7. Implement infinite scroll
  //// 7a. move API call into a custom hook
  //// 7b. change the endpoint to accept a page# variable
  //// 7c. create state for page number and hasNext (?) - OR can I use the link that's in the json??
  //// 7d. run an API call when user scrolls
  //// 7e. Add Scroll to top
  // 8. Refactor
    //8a. Refactor Kicks as a separate component
    //8b. Refactor playlist as a separate component
    //8c. Refactor video thumbnails as separate components

// BONUS
//// 9. Videos
//// 9a. Use Router
  //// 9b. Query API and store data
  //// 9c. display the list of videos thumbnails on the page and two-way bind them to a checkbox input
  //// 9d. create a video player
// 10. Create map pin functionality
