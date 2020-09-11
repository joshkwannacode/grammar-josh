import React from "react";
import Main from "./Main";
//import "./styles/App.scss";
import AppBar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import FrontPage from "./components/FrontPage";
function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
          <AppBar />
          <Switch>
            <Route exact path="/" component={FrontPage} />
            <Route exact path="/Function" component={Main} />
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}
export default App;
