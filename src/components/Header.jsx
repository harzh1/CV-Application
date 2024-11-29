import logo from "/src/assets/logo.png";
import { jsPDF } from "jspdf";
import { useState } from "react";

function Header() {
  const [message, setMessage] = useState("");

  function generateCV() {
    const doc = new jsPDF("p", "pt", "a4"); // Set page size to A4
    const content = document.querySelector(".cv-container");

    setMessage("Your CV is being generated...");

    doc.html(content, {
      callback: function (doc) {
        doc.save("cv.pdf");
        setMessage("Your CV has been downloaded.");
      },
      x: 10,
      y: 10,
      width: doc.internal.pageSize.getWidth() - 20, // Fit content within page width
      windowWidth: content.scrollWidth, // Set window width to content's scroll width
    });

    console.log("CV generated");
  }

  return (
    <>
      <header className="main-header">
        <div className="header-brand">
          <img className="logo-img" src={logo} alt="logo" />
          <p className="logo-name">CV Application</p>
        </div>

        <div className="header-btns">
          <button onClick={generateCV}>Generate CV</button>
        </div>
      </header>
      {message && <p>{message}</p>}
    </>
  );
}

export default Header;
