import { Route, A } from "@solidjs/router";
import { lazy } from "solid-js";

const Network = lazy(() => import("./modules/network/routes"));

export default function App() {
  return (
    <>
      <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
        <A href="/">Network</A>
      </nav>

      <Route path="/" component={Network} />
    </>
  );
}
