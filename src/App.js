import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import GlobalContextProvider from './GlobalContext';
import NavBar from './Components/NavBar';
import Main from './Pages/Main';
import Research from './Pages/Research';
import Projects from './Pages/Projects';

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalContextProvider>
          <NavBar />
          <Route path="/" exact strict component={Main} />
          <Route path="/research" exact strict component={Research} />
          <Route path="/projects" exact strict component={Projects} />
          <Route path="/public/resume.pdf" exact strict/>
          
        </GlobalContextProvider>
      </div>
    </Router>
  );
}

export default App;
