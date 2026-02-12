import { render } from "solid-js/web";
import App from "./App";
import "uno.css"

console.log("SPA booting...");
render(
  () => (
      <App />
  ),
  document.getElementById("root")!
);
