import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
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
          <Route path={process.env.PUBLIC_URL + '/research'} exact strict component={Research} />
          <Route path={process.env.PUBLIC_URL + '/projects'} exact strict component={Projects} />          
        </GlobalContextProvider>
      </div>
    </Router>
  );
}

export default App;
