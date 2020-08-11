import React from 'react';
import NavBar from './Components/NavBar';
import GlobalContextProvider from './GlobalContext';
import Footer from './Components/Skills';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalContextProvider>
          <NavBar />
          <Route path="/" exact strict component={Footer} />
          <Route path="/research" exact strict render={()=>{
            return (<div></div>)
          }} />
          <Route path="/projects" exact strict render={()=>{
            return (<div></div>)
          }} />
          <Route path="/resume" exact strict render={()=>{
            return (<div></div>)
          }} />
          
        </GlobalContextProvider>
      </div>
    </Router>
  );
}

export default App;
