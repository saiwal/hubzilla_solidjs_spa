import "./index.css";
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import { For, lazy, Suspense } from "solid-js";
import type { Component } from "solid-js";
import Layout from "./app/layout/Layout";

const modules = import.meta.glob<{
  default: Component;
}>("./modules/**/routes.tsx");

const routes = Object.entries(modules).map(([path, loader]) => {
  const match = path.match(/\.\/modules\/([^/]+)\/routes\.tsx$/);
  const name = match?.[1] ?? "";

  return {
    path: name === "dashboard" ? "/" : `/${name}`,
    component: lazy(loader),
  };
});

render(
  () => (
    <Router>
      <Route path="/" component={Layout}>
        <Suspense fallback={<div>Loading...</div>}>
          <For each={routes}>
            {(r) => (
              <Route path={r.path} component={r.component} />
            )}
          </For>
        </Suspense>
      </Route>
    </Router>
  ),
  document.getElementById("root")!
);
