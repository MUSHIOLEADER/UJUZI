import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Agent from './component/Agent';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Body from './component/Body';
import './App.css';
import Client from './component/Client';

function App() {
  return (
    <Router>
    <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path={'/'}>
                    <Body/>
            </Route>
            <Route exact path={'/agent'}>
                 <Agent/>
            </Route>
            <Route exact path={'/client'}>
               <Client/>
           </Route>
     
          
          </Switch>
          
          <Footer/>
      </div>
    
    </Router>

  );
}

export default App;
