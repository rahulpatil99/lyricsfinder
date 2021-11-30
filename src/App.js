
import './App.css';

import {BrowserRouter as Router , Route , Routes } from 'react-router-dom';

import Header from './components/Layout/Header';
// import Spinner from './components/Layout/Spinner';
import Search from './components/Layout/Search';
import React from 'react';
import {Provider} from './context';
import Index from './components/Layout/Index';

function App() {
  return (
    <Provider>
      
    <Router>
    <React.Fragment>
      <Header/>
      <Search/>
      <div className="container">
        <Routes>
          <Route exact path='/' element ={<Index/>}/>
        </Routes>
      </div>
      {/* <Spinner/> */}
    </React.Fragment>
    </Router>
    </Provider>
  );
}

export default App;
