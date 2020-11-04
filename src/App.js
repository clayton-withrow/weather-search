import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

//App Components
import Header from './Header';
import Home from './Home';
import Current from './Current';
import Search from './Search';
import Contact from './Contact';
import Zip from './Zip';


const App = () => (
  <BrowserRouter>
    <div className="container">
      {/* Creates routing between the different components of app. */}
      <Header />
      <Route exact path="/" component={Home} />
      <Route path ="/Current" component={Current} />
      <Route path ="/Search" component={Search} />
      <Route path ="/Zip" component={Zip} />
      <Route path ="/Contact" component={Contact} />
    </div>
  </BrowserRouter>
);

export default App;
