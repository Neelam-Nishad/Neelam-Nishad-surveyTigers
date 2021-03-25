import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Menu from './components/Menu';
import CreateSurvey from './components/CreateSurvey';
import Published from './components/Published';
import { useState } from 'react';
import {Link} from 'react-router-dom';

function App() {

  const [squestions, setSquestions] = useState([{question:"Want to start survey?", options : ["Yes", "Ofcourse Yes"]}]);

  return (
    <>
      <div className='page container p-2 mt-2 ml-20 mr-20'>
        <Router>
            <Link to="./">
              <div id="logo">
                <h1>🐾 SURVEY TIGERS 🐾</h1>
              </div>
            </Link>
          <Switch>
            <Route path="/"  component={Menu} exact/>

            <Route path="/create" exact>
              <CreateSurvey setSquestions={setSquestions} squestions={squestions} />
            </Route>

            <Route path="/published" exact>
              <Published squestions={squestions}/>
            </Route>
            
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
