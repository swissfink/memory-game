import React from "react";
import "./style.css";

// eslint-disable-next-line
function Footer() {
  return (
    <footer className="footer">
      <div className="bottom">
        {/* eslint-disable-next-line react/jsx-no-target-blank */}
        Clicky Game <i className="fab fa-react"></i> &nbsp;  &copy; copyright 2019 <a href="https://swissfink.github.io/" target="_blank" class="footer-text">Richard Fink</a>. All rights reserved. <a href="https://github.com/swissfink/memory-game" target="_blank" class="footer-text"> See the project repo <i className="fas fa-external-link-alt">.</i></a> 
      </div>  
    </footer>
  );
}

export default Footer;






