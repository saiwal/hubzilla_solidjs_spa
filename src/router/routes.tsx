import { Route } from "@solidjs/router";
import Stream from "../pages/Stream";
import Dashboard from "../pages/Dashboard";

export default function AppRoutes() {
  return (
    <>
      <Route path="/" component={Stream} />
      <Route path="/stream" component={Stream} />
      <Route path="/dashboard" component={Dashboard} />
    </>
  );
}

