import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header className="App-header">
      <h1>Components Life Cycle</h1>
      <Link className="link" to="/Home">Home</Link>
      <Link className="link" to="/Mounting">Mounting</Link>
      <Link className="link" to="/Unmounting">Unmounting</Link>
      <Link className="link" to="/Update">Update</Link>      
      </header>
    </div>
  );
}

export default Header;
