import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/homepage";
import Onboarding from "./components/onboarding";
import Dashboard from "./components/dashboard";
import GoldTransactions from "./components/gold-transactions";
import BuyGold from "./components/gold-transactions/buy-gold";
import BuyGoldSuccessfully from "./components/gold-transactions/buy-gold/successfull";
import SelectAccount from "./components/gold-transactions/sell-gold";
import SellGoldSuccessfully from "./components/gold-transactions/sell-gold/Successfull";
import SellGoldFailure from "./components/gold-transactions/sell-gold/Failure";
import DeliveryPin from "./components/gold-transactions/delivery/DeliveryPin";
import TransferGoldSucessfully from "./components/gold-transactions/transfer/Successfull";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/onboarding" component={Onboarding} />
        <Route exact path="/gold-transactions" component={GoldTransactions} />
        <Route path="/gold-transactions/buy" component={BuyGold} />
        <Route
          path="/gold-transactions/successfull"
          component={BuyGoldSuccessfully}
        />
        <Route
          path="/gold-transactions/sell-gold/successfull"
          component={SellGoldSuccessfully}
        />
        <Route
          path="/gold-transactions/sell-gold/failure"
          component={SellGoldFailure}
        />
        <Route path="/gold-transactions/sell" component={SelectAccount} />
        <Route path="/gold-transactions/delivery/pin" component={DeliveryPin} />
        <Route
          path="/gold-transactions/transfer"
          component={TransferGoldSucessfully}
        />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
