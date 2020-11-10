import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import MainScreen from './screens/MainScreen';
import './App.css';
import SearchScreen from './screens/SearchScreen';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route path='/search/:location' component={SearchScreen} exact />
        <Route path='/' component={MainScreen} exact/>
        <hr/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
 