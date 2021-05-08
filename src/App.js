import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Hello from './components/Hello'
import Hola from './components/Hola'
import './App.css';
import Form from './components/Form';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/hola">Hola</Link>
          </li>
          <li>
            <Link to="/form">Form</Link>
          </li>
        </ul>
      </nav>
    <div className="App">
      <Switch> 
        <Route path='/hola'>
          <Hola />
        </Route>
        <Route path="/form">
          <Form />
        </Route>
        <Route path="/">
          <Hello />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
