import { For } from "solid-js";
import NavItem from "./NavItem";
import { mainNav } from "./nav.config";
import ThemeToggle from "./ThemeToggle";

const Sidebar = () => {
  return (
    <aside class="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4">
      <h2 class="text-xl font-bold mb-6">Hubzilla</h2>

      <nav class="space-y-2">
        <For each={mainNav}>
          {(item) => <NavItem {...item} />}
        </For>
      </nav>
			<ThemeToggle />
    </aside>
  );
};

export default Sidebar;
