import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import Layout from "./Layout";
import Network from "./modules/network/routes";

render(
  () => (
    <Router>
      <Route path="/" component={Network} />
    </Router>
  ),
  document.getElementById("root")!
);
