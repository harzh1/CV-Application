import React from "react";
import logo from "/src/assets/logo.png";

function Header() {
  function generateCV() {
    alert("CV generater is not yet implemented");
  }

  return (
    <>
      <header className="main-header">
        <div className="header-brand">
          <img className="logo-img" src={logo} alt="logo" />
          <p className="logo-name">CV Application</p>
        </div>

        <div className="header-btns">
          <button onClick={generateCV}>Generate CV </button>
        </div>
      </header>
    </>
  );
}

export default Header;
