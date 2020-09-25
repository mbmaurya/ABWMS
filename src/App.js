import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
