import { writable } from "svelte/store";

export const mapsLoaded = writable(false);
export const mapsLoading = writable(false);

export const mapStore = writable(null);
