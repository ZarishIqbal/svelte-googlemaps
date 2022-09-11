<script>
  import { Loader } from "@googlemaps/js-api-loader";

  import { createEventDispatcher, onMount } from "svelte";
  import { mapsLoaded, mapsLoading } from "./stores.js";

  const dispatch = createEventDispatcher();

  export let apiKey;

  $: $mapsLoaded && dispatch("ready");

  onMount(() => {
    window.byGmapsReady = () => {
      mapsLoaded.set(true);
      delete window.byGmapsReady;
    };

    if ($mapsLoaded) {
      dispatch("ready");
    }

    if (!$mapsLoading) {
      mapsLoading.set(true);

      const loader = new Loader({
        apiKey: apiKey,
        version: "weekly",
        libraries: ["places"],
      });
      loader.load().then((e) => window.byGmapsReady());
    }
  });
</script>
