<script>
import InlineArtistList from '$lib/InlineArtistList.svelte';
import ImageGallery from '$lib/ImageGallery.svelte';
import SEO from '$lib/SEO.svelte';
import { PUBLIC_TP_APP_URL } from '$env/static/public';

/** @type {import('./$types').PageData} */
export let data;

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let exhibitionDate = new Date(data.exhibition.start_date);

let formattedExhibitionDate = `${months[exhibitionDate.getMonth()]}, ${exhibitionDate.getFullYear()}`

let scrollPosition;
let mainContainerHeight;
let currentWindowHeight
let spacerHeight;

$: buttonPosition = scrollPosition + currentWindowHeight - spacerHeight > mainContainerHeight ? "absolute" : "fixed";

let imagesForWebGallery = [
    {url: data.exhibition.cover_image_url, caption: `${data.exhibition.title} - poster`}
].concat(data.exhibition.images);

// data.exhibition.images;

// console.log(JSON.stringify(imagesForWebGallery))
</script>
<SEO 
    title="{data.exhibition.title} - Digital Art Exhibition"
    description="{data.exhibition.blurb}"
    image="{data.exhibition.cover_image_url}"
/>

<svelte:head>
    <style>
        .exhibition-subtitle {
            margin-top: 1rem;
            opacity: 0.64;
        }

        hr {
            margin: 2.5rem 0;
            opacity: 0.5;
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
<svelte:window bind:innerHeight={currentWindowHeight} bind:scrollY={scrollPosition} />

<div class="header-spacer" bind:clientHeight={spacerHeight} />
<div class="section" bind:clientHeight={mainContainerHeight}>
    <div class="container">
        <div class="flex-container">
            <div class="flex-item" style="text-align: center;">
                <div class="mobile-poster">
                    <img 
                        src="{data.exhibition.cover_image_url}"
                        alt="{data.exhibition.title} - poster"
                        title="{data.exhibition.title} - poster"
                        loading="lazy" 
                        decoding="async"
                    /> 
                </div>
                <ImageGallery images={imagesForWebGallery} exhibtionTitle={data.exhibition.title} />
            </div>
            <div class="flex-item">
                <h1>{data.exhibition.title}</h1>
                <h5 class="exhibition-subtitle">
                    <InlineArtistList artists={data.exhibition.curators}/>
                    {formattedExhibitionDate}
                </h5>
                <p style="marging-bottom: 2rem;"><InlineArtistList artists={data.exhibition.artists}/></p>
                <hr/>
                {@html data.exhibition.description}
                <a style="display: inline-block;" href="{PUBLIC_TP_APP_URL}" target="_blank" rel="noreferrer">
                    <button style="position: {buttonPosition};" class="action-button light fixed-btn">View in-App</button>
                </a>
            </div>
            <div class="flex-item mobile-feed">
                {#each data.exhibition.images as image}
                <div class="mobile-feed-image">
                    <img 
                        style="display: block;"
                        src="{image.url}"
                        alt="{data.exhibition.title} - {image.caption}"
                        title="{data.exhibition.title} - {image.caption}"
                        loading="lazy" 
                        decoding="async"
                    /> 
                    <label class="image-label" style="padding: 4px 0;">{image.caption}</label>
                </div>
                {/each}
            </div>
        </div>
        <div class="spacer"></div>
    </div>
</div>