import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import './components/Footer/Footer';
import './components/Header/Header';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';
import Teachers from './components/Teachers/Teachers';
const App = () => {
  return (
    <div className="App">
        <BrowserRouter>
        <Header></Header>
          <Switch>
            <Route path="/services">
                <Services></Services>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/teacher">
              <Teachers></Teachers>
            </Route>
        
            <Route path="/contact">
                <Contact></Contact>
            </Route>
            <Route path="/home">
                <Home></Home>
            </Route>
            <Route exact path="/">
                  <Home></Home>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
            
          </Switch>
         
        </BrowserRouter>
    </div>
  );
};

export default App;