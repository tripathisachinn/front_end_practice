import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Mounting from "./Components/Mounting";
import Unmounting from "./Components/Unmounting";
import Update from "./Components/Update";
import Header from "./Components/Partials/Header";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <switch>
          <Route exact path="/Home"><Home /></Route>
          <Route exact path="/Mounting"><Mounting /></Route>
          <Route exact path="/Unmounting"><Unmounting /></Route>
          <Route exact path="/Update"><Update /></Route>
        </switch>
      </Router>
    </div>
  );
}

export default App;
