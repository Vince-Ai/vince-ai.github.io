import React from 'react';
import NavBar from './Components/NavBar';
import GlobalContextProvider from './GlobalContext';


function App() {
  return (
     <div className="App">
      <GlobalContextProvider>
        <NavBar />
        <div>
          What's up! This is Vince Ai's personal website. More contents will be coming soon!
        </div>
      </GlobalContextProvider>
   </div>
  );
}

export default App;
