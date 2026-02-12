import { Route } from "@solidjs/router";
import Stream from "../pages/Stream";

export default function Routes() {
  return (
    <>
      <Route path="/" component={Stream} />
      <Route path="/stream" component={Stream} />
    </>
  );
}
