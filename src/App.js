import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from './components/homepage';
import Onboarding from "./components/onboarding";
import Dashboard from "./components/dashboard";
import GoldTransactions from "./components/gold-transactions";
import BuyGold from "./components/gold-transactions/buy-gold";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Route path = "/" exact component={Home} />
        <Route path = "/dashboard" component={Dashboard} />
        <Route path = "/onboarding" component={Onboarding} />
        <Route exact path = "/gold-transactions" component={GoldTransactions} />
        <Route path="/gold-transactions/buy" component={BuyGold} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
