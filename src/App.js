import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Events from './components/Events';
import Services from './components/Services';
import Shop from './components/Shop';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/events" exact component={Events} />
            <Route path="/services" exact component={Services} />
            <Route path="/shop" exact component={Shop} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  };
}

export default App;
