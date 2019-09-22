import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Home from "./features/home/containers/Home";
import Blocks from "./features/blocks/Blocks";
import Block from "./features/block/containers/Block";
import Transaction from "./features/transaction/containers/Transaction";
import Header from "./features/header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Container maxWidth="lg">
        <Route path="/" exact component={Home} />
        <Route path="/blocks" component={Blocks} />
        <Route path="/block" component={Block} />
        <Route path="/transaction" component={Transaction} />
      </Container>
    </Router>
  );
}

export default App;
