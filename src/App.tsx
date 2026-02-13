import { Route } from "@solidjs/router";
import Layout from "./components/layout/Layout";
import Stream from "./pages/Stream";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <Route path="/" component={Layout}>
      <Route path="/" component={Stream} />
      <Route path="/stream" component={Stream} />
      <Route path="/dashboard" component={Dashboard} />
    </Route>
  );
}
