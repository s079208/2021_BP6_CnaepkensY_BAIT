import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import home from "../../public/img/home.png";
import visplek from "../../public/img/visplek.png";
import azen from "../../public/img/azen.png";
import visnet from "../../public/img/visnet.png";
import maadje from "../../public/img/maadje.png";
import prestatie from "../../public/img/prestaties.png";
import account from "../../public/img/account.png";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <img className="nav_img" src={home} alt="Logo" />
            Home
          </Link>
        </li>
        <li>
          <Link to="/visplek">
            <img className="nav_img" src={visplek} alt="Logo" />
            Visplekken
          </Link>
        </li>
        <li>
          <Link to="/azen">
            <img className="nav_img" src={azen} alt="Logo" />
            Azen
          </Link>
        </li>
        <li>
          <Link to="/visnet">
            <img className="nav_img" src={visnet} alt="Logo" />
            Visnet
          </Link>
        </li>
        <li>
          <Link to="/maadje">
            <img className="nav_img" src={maadje} alt="Logo" />
            Maadjes
          </Link>
        </li>
        <li>
          <Link to="/prestaties">
            <img className="nav_img" src={prestatie} alt="Logo" />
            Prestaties
          </Link>
        </li>
        <li>
          <Link to="/account">
            <img className="nav_img" src={account} alt="Logo" />
            Account
          </Link>
        </li>
      </ul>
    </nav>
  );
}
