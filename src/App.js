import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Body from './component/Body';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path={'/'}>
                    <Body/>
            </Route>
          
          </Switch>
          
          <Footer/>
      </div>
    
    </Router>

  );
}

export default App;
