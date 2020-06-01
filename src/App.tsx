import React from 'react';

import Map from './components/Map/index';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import YourLocation from './components/YourLocation/index';

import './styles/main.scss';

const App = () => (
  <div className="App">
    <Header />
    <div className="flex">
      <Map />
      <YourLocation />
    </div>
    <Footer />
  </div>
);

export default App;
