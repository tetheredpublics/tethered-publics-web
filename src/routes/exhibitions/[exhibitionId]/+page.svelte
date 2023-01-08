<script>
import InlineArtistList from '$lib/InlineArtistList.svelte';
import ImageGallery from '$lib/ImageGallery.svelte';
import SEO from '$lib/SEO.svelte';

/** @type {import('./$types').PageData} */
export let data;

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let exhibitionDate = new Date(data.exhibition.start_date);

let formattedExhibitionDate = `${months[exhibitionDate.getMonth()]}, ${exhibitionDate.getFullYear()}`

</script>
<SEO 
    title="{data.exhibition.title} - Digital Art Exhibition"
    description="{data.exhibition.blurb}"
    image="{data.exhibition.images[0].url}"
/>

<svelte:head>
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
                <ImageGallery images={data.exhibition.images} exhibtionTitle={data.exhibition.title} />
            </div>
            <div class="flex-item">
                <h1>{data.exhibition.title}</h1>
                <h5 class="exhibition-subtitle">
                    <InlineArtistList artists={data.exhibition.curators}/>
                    {formattedExhibitionDate}
                </h5>
                <p><InlineArtistList artists={data.exhibition.artists}/></p>
                <hr/>
                {@html data.exhibition.description}
            </div>
        </div>
    </div>
</div>