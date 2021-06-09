import React from "react";
import styled from "styled-components";
import logo from "../../public/img/logo.png";
import "../app.css";

export default function Home() {
  return (
    <>
      <img className="logo" src={logo} alt="Logo" />
    </>
  );
}
