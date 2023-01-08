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

        .mobile-feed, .mobile-poster {
            display: none;
        }

        @media (max-width: 680px) {
            .mobile-feed, .mobile-poster {
                display: block;
            }
        }

        .mobile-feed-image {
            margin-bottom: 1.5rem;
        }

        .image-label {
            font-size: 14px;
            line-height: 24px;
            display: block;
            opacity: 0.64;
            text-align: left;
        }

    </style>
</svelte:head>
<div class="header-spacer"/>
<div class="section">
    <div class="container">
        <div class="flex-container">
            <div class="flex-item" style="text-align: center;">
                <div class="mobile-poster">
                    <img 
                        src="{data.exhibition.cover_image.url}"
                        alt="{data.exhibition.title} - {data.exhibition.cover_image.caption}"
                        title="{data.exhibition.title} - {data.exhibition.cover_image.caption}"
                        loading="lazy" 
                        decoding="async"
                    /> 
                </div>
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
            <div class="flex-item mobile-feed">
                {#each data.exhibition.images.slice(1) as image}
                <div class="mobile-feed-image">
                    <img 
                        style="display: block;"
                        src="{image.url}"
                        alt="{data.exhibition.title} - {image.caption}"
                        title="{data.exhibition.title} - {image.caption}"
                        loading="lazy" 
                        decoding="async"
                    /> 
                    <label class="image-label" style="padding: 8px 0;">{image.caption}</label>
                </div>
                {/each}
            </div>
        </div>
    </div>
</div>