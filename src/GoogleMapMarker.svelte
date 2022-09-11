<script>
  import { mapStore } from "./stores";
  const map = $mapStore;
  export let lat;
  export let lng;

  // eslint-disable-next-line no-new
  new window.google.maps.Marker({
    position: { lat, lng },
    map,
  });
</script>
