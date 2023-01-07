<script>
import InlineArtistList from '../../../lib/InlineArtistList.svelte';
import ImageGallery from '../../../lib/ImageGallery.svelte';

/** @type {import('./$types').PageData} */
export let data;

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let exhibitionDate = new Date(data.exhibition.start_date);

let formattedExhibitionDate = `${months[exhibitionDate.getMonth()]}, ${exhibitionDate.getFullYear()}`

</script>
<svelte:head>
    <title>{data.exhibition.title} – Tethered Publics Exhibition</title>

    <style>
        .exhibition-subtitle {
            margin-top: 1rem;
            opacity: 0.64;
        }

        hr {
            margin: 2.5rem 0;
            opacity: 0.64;
        }
    </style>
</svelte:head>
<div class="header-spacer"/>
<div class="section">
    <div class="container">
        <div class="flex-container">
            <div class="flex-item first" style="text-align: center;">
                <!-- <img 
                    style="max-width: 100%;" 
                    src="{data.exhibition.cover_image.url}" 
                    alt="{data.exhibition.title} Exhibition Poster"
                    title="{data.exhibition.title} Exhibition Poster"
                /> -->
                <ImageGallery images={data.exhibition.images} />
            </div>
            <div class="flex-item">
                <h1>{data.exhibition.title}</h1>
                <h5 class="exhibition-subtitle">
                    <InlineArtistList artists={data.exhibition.curators}/>
                    {formattedExhibitionDate}
                </h5>
                <p><InlineArtistList artists={data.exhibition.artists}/></p>

                <!-- <h3>About</h3> -->
                <hr/>
                {@html data.exhibition.description}
            </div>
        </div>
    </div>
</div>