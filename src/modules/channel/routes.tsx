import { onMount } from "solid-js";

export default function Channel() {
  onMount(() => {
    console.log("Channel module mounted");
  });

  return <div>Channel Module</div>;
}
