import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/homepage";
import Onboarding from "./components/onboarding";
import Dashboard from "./components/dashboard";
import GoldTransactions from "./components/gold-transactions";
import BuyGold from "./components/gold-transactions/buy-gold";
import BuyGoldSuccessfully from "./components/gold-transactions/buy-gold/successfull";
import SellGoldFailure from "./components/gold-transactions/sell-gold/Failure";
import DeliveryPin from "./components/gold-transactions/delivery/DeliveryPin";
import TransferGoldSucessfully from "./components/gold-transactions/transfer/Successfull";
import CostSelector from "./components/global/CostSelector";
import OrderPlaced from "./components/gold-transactions/delivery/OrderPlaced";
import Notification from "./components/gold-transactions/sell-gold/Notification";

function App() {
  return (
      <div className="app">
        <Header />
        <Router>
          <Switch>
          
          <Route path="/cost-selector">
               <CostSelector />
            </Route>
            <Route path="/gold-transactions/transfer">
              <TransferGoldSucessfully />
            </Route>
            <Route path="/gold-transactions/delivery/pin">
              <DeliveryPin />
            </Route>
            
            <Route path="/onboarding/VerifyKyc">
               <Onboarding />
            </Route>
            <Route path="/onboarding/bankdetails">
                <Onboarding currentStepValue={2} />
            </Route>
            <Route path="/onboarding/uploadcheck">
                <Onboarding currentStepValue={3} />
            </Route>
            <Route path="/onboarding/addbank">
                <Onboarding currentStepValue={3} Verified={true} />
            </Route>
            <Route path="/onboarding/addressdetails">
                <Onboarding currentStepValue={4} />
            </Route>
            <Route path="/onboarding/addbank">
                <Onboarding currentStepValue={4} Verified={true} />
            </Route>
          <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/gold-transactions/failure">
              <SellGoldFailure />
            </Route>
            <Route path="/gold-transactions/priceupdate">
              <Notification type="price-update" />
            </Route>
            <Route path="/gold-transactions/pricechanged">
              <Notification type="price-change" />
            </Route>
            <Route path="/gold-transactions/buygold-transaction">
              <BuyGold />
            </Route>
           
            <Route path="/gold-transactions/transfer/successfull">
              <TransferGoldSucessfully />
            </Route>
            <Route path="/gold-transactions/delivery/orderplaced">
              <OrderPlaced />
            </Route>
            <Route path="/gold-transactions/delivery/address">
              <DeliveryPin />
            </Route>
            <Route path="/gold-transactions/delivery/checkpin">
              <DeliveryPin statusProp="checkpin" />
            </Route>
            <Route path="/gold-transactions/buy/successfull">
              <BuyGoldSuccessfully />
            </Route>
          <Route path="/gold-transactions/buy">
              <BuyGold />
            </Route>
            <Route path="/gold-transactions">
              <GoldTransactions />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>

  );
}

export default App;
