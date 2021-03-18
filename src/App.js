import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Country from './components/Country/Country';
import Header from './components/Header/Header';
import CountrySecret from './components/CountrySecret/CountrySecret';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="App">
     <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
        <Router>
          <Header></Header>
          <p className="text-success"><b>Logged In User:</b> {loggedInUser.email}</p>
          <Switch>
            <Route path ="/home">
              <Home></Home>
            </Route>
            <Route path ="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path ="/country">
              <CountrySecret></CountrySecret>
            </PrivateRoute>
            <PrivateRoute path ="/countries/:name">
              <Country></Country>
            </PrivateRoute>
            <Route exact path ="/">
              <Home></Home>
            </Route>
            <Route exact path ="*">
              <NotFound></NotFound>
            </Route>    
          </Switch>
        </Router>
     </UserContext.Provider>
    </div>
  );
}

export default App;
