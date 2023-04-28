<script>
	import { text } from "svelte/internal";

export let artists;
export let showsHover = true;
</script>

<svelte:head>
    <style>
        .artist-credit {
            transition: all 0.3s;
            display: inline-block;
            /* font-style: italic; */
        }

        .showshover {
            transition: all 0.3s;
            opacity: 0.64;
            padding: 0.5rem 0;
            display:block;
        }
        .artist-credit:hover, .showshover:hover {
            opacity: 1.0;
        }
    </style>
</svelte:head>

{#each artists as artist, i}
    <a class="artist-credit" class:showshover={showsHover} href="{artist.website}" target="_blank" rel="noreferrer">
        {artist.full_name}
    </a>
{/each}