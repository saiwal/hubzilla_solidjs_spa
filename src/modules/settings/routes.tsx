import { onMount } from "solid-js";

export default function Settings() {
  onMount(() => {
    console.log("Settings module mounted");
  });

  return <div>Settings Module</div>;
}
