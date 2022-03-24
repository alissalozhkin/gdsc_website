import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Navbar } from "./components/Navbar/Navbar";
import { Landing } from './views/Landing/Landing';
import { Team } from './views/Team2020/Team';
// import { default as Footer } from './views/Footer/Footer';
import { FooterContainer } from './containers/footer'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Switch>
        <Route exact path='/' render={() => (<Landing />)}/>
        <Route exact path='/team/2020' render={() => (<Team />)}/>        
      </Switch>
      </BrowserRouter>
      <FooterContainer></FooterContainer>
    </div>
  );
}

export default App;
