import "./App.css";
import Form from "./components/Form";
import FormTwo from "./components/FormTwo";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Heading from "./components/Heading";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function App() {
  useGSAP(() => {
    gsap.from(".sign-in-form ", {
      y: 1000,
      duration: 1,
      delay: 1,
    });
    gsap.from(".heading ", {
      y: 90,
      duration: 0.5,
      delay: 0.5,
    });
  });
  return (
    <>
      <Router>
        <Navbar title="sneat" />
        <Heading className="gsap" />
        <Switch>
          <Route exact path="/">
            <Form title="sneat" welcome="Welcome to Sneat! 👋" />
          </Route>
          <Route exact path="/FormTwo">
            <FormTwo title="sneat" welcome="Welcome to Sneat! 👋" />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
