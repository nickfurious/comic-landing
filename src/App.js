import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import "./App.css";
import Home from "./components/Home";
import Venom3 from "./components/Venom3";
import DeadpoolvsCarnage from "./components/DeadpoolvsCarnage";
import Hulkerine from "./components/Hulkerine";
import Venomcarnage from "./components/Venomcarnage";
import Norse from "./components/Norse";
import Unteens from "./components/Unteens";
import Witcher from "./components/Witcher";
import Cyberpunk from "./components/Cyberpunk";
import Spawn320 from "./components/Spawn320";
import Walkingdead from "./components/Walkingdead";
import Pitt from "./components/Pitt";
import Hulkpitt from "./components/Hulkpitt";
import Darthvader from "./components/Darthvader";
import Yoda from "./components/Yoda";
import Darthmaul from "./components/Darthmaul";
import Kyloren from "./components/Kyloren";
import Cyborg from "./components/Cyborg";
import Flash from "./components/Flash";
import Greenstar from "./components/Greenstar";
import Batman from "./components/Batman";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/venom3">
            <Venom3 />
          </Route>
          <Route path="/deadpoolvscarnage">
            <DeadpoolvsCarnage />
          </Route>
          <Route path="/hulkerine">
            <Hulkerine />
          </Route>
          <Route path="/venomcarnage">
            <Venomcarnage />
          </Route>
          <Route path="/norse">
            <Norse />
          </Route>
          <Route path="/unteens">
            <Unteens />
          </Route>
          <Route path="/witcher">
            <Witcher />
          </Route>
          <Route path="/cyberpunk">
            <Cyberpunk />
          </Route>
          <Route path="/spawn320">
            <Spawn320 />
          </Route>
          <Route path="/walkingdead">
            <Walkingdead />
          </Route>
          <Route path="/pitt">
            <Pitt />
          </Route>
          <Route path="/hulkpitt">
            <Hulkpitt />
          </Route>
          <Route path="/darthvader">
            <Darthvader />
          </Route>
          <Route path="/yoda">
            <Yoda />
          </Route>
          <Route path="/darthmaul">
            <Darthmaul />
          </Route>
          <Route path="/kyloren">
            <Kyloren />
          </Route>
          <Route path="/cyborg">
            <Cyborg />
          </Route>
          <Route path="/flash">
            <Flash />
          </Route>
          <Route path="/greenstar">
            <Greenstar />
          </Route>
          <Route path="/batman">
            <Batman />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
