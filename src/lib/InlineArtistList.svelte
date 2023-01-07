<script>
export let artists;
</script>

<svelte:head>
    <style>
        .artist-credit {
            transition: all 0.3s;
        }
        .artist-credit:hover {
            opacity: 0.64;
        }
    </style>
</svelte:head>

{#each artists as artist, i}
    <a class="artist-credit" href="{artist.website}" target="_blank" rel="noreferer">
        {artist.full_name}{#if i < (artists.length-1)}, {:else}.{/if}
    </a>
{/each}