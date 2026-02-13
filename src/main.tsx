import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
import App from "./App";
import "uno.css";

console.log("SPA booting...");

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById("root")!
);
