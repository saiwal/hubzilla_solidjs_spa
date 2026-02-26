import type { ParentComponent } from "solid-js";
import { A } from "@solidjs/router";

const Layout: ParentComponent = (props) => {
  return (
    <div class="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div class="flex">

        {/* Sidebar */}
        <aside class="w-64 h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4">
          <h2 class="text-xl font-bold mb-6">Hubzilla</h2>

          <nav class="space-y-2">
            <A href="/" class="block px-3 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition">
              Network
            </A>
            <A href="/channel" class="block px-3 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition">
              Channel
            </A>
						<A href="/settings" class="block px-3 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition">
              Settings
            </A>
          </nav>
        </aside>

        {/* Content Area */}
        <main class="flex-1 p-6">
          {props.children}
        </main>

      </div>
    </div>
  );
}

export default Layout;
