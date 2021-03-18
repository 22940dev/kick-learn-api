import './App.scss';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header';
import StoresPage from './components/StoresPage';
import VideosPage from './components/VideosPage';
import ScrollToTop from 'react-scroll-to-top'; // scroll to top button



function App() {
  
  return (
    <Router basename={process.env.PUBLIC_URL}>
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