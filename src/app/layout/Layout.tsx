import type { ParentComponent } from "solid-js";
import Sidebar from "./Sidebar";

const Layout: ParentComponent = (props) => {
  return (
    <div class="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div class="flex">
        <Sidebar />

        <main class="flex-1 p-6">
          {props.children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
