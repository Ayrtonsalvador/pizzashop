import React from 'react';
import Hero from './components/Hero';
import Products from './components/Products';
import Feature from './components/Feature';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import { productData, productDataTwo } from './components/Products/data';


function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Hero />
        <Products heading='Choose your favorite' data={productData} />
        <Feature />
        <Products heading='Sweet treats for you' data={productDataTwo} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
