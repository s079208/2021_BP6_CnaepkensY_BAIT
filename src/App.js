import React from "react";

// import global styles
import GlobalStyle from "./components/GlobalStyle";

import Home from "./pages/home";
import Visplek from "./pages/visplek";
import Azen from "./pages/azen";
import Visnet from "./pages/visnet";
import Maadje from "./pages/maadje";
import Prestaties from "./pages/prestaties";
import Account from "./pages/account";
import VisplekDetail from "./pages/visplekDetail";
import AzenDetail from "./pages/azenDetail";
import VisnetDetail from "./pages/visnetDetail";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/visplek">
            <Visplek />
          </Route>
          <Route path="/azen">
            <Azen />
          </Route>
          <Route path="/visnet">
            <Visnet />
          </Route>
          <Route path="/maadje">
            <Maadje />
          </Route>
          <Route path="/prestaties">
            <Prestaties />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/visplekDetail">
            <VisplekDetail />
          </Route>
          <Route path="/azenDetail">
            <AzenDetail />
          </Route>
          <Route path="/visnetDetail">
            <VisnetDetail />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}
