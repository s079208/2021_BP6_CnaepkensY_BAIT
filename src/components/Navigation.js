import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import locatie from "../../public/img/locatie.png";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/visplek">
            <div className="grid_nav">
              <img className="nav_img" src={locatie} alt="Logo" />
              <p>Visplekken</p>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/azen">Azen</Link>
        </li>
        <li>
          <Link to="/visnet">Visnet</Link>
        </li>
        <li>
          <Link to="/maadje">Maadjes</Link>
        </li>
        <li>
          <Link to="/account">Account</Link>
        </li>
      </ul>
    </nav>
  );
}
