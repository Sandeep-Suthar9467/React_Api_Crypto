import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import { FooterContainer } from './containers/footer';
import Calculator from './components/Calculator';
import { Exchanges, Homepage, News, Cryptocurrencies, CryptoDetails, Navbar } from './components';
import './App.css';

const App = () => (
  <div className="app">
    <div className="main">
      <Layout>
        <Navbar />
        <div className="routes">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/exchanges">
              <Exchanges />
            </Route>
            <Route exact path="/cryptocurrencies">
              <Cryptocurrencies />
            </Route>
            <Route exact path="/crypto/:coinId">
              <CryptoDetails />
            </Route>
            <Route exact path="/news">
              <News />
            </Route>
            <Route exact path="/calci">
              <Calculator />
            </Route>
          </Switch>
        </div>
      </Layout>
      <FooterContainer />
    </div>
  </div>
);

export default App;
