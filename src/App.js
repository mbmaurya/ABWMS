import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Onboarding from "./components/onboarding";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Route path="/onboarding" component={Onboarding} />
        <Route path="/dashboard" component={Dashboard} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
