<script>
export let images;
export let exhibtionTitle;

let currentIndex = 0;
let totalImages = images.length;

let currentImageUrl;
let currentImageCaption;


$: currentImageUrl = images[currentIndex].url;
$: currentImageCaption = images[currentIndex].caption;

function nextImage() {
    currentIndex = currentIndex < totalImages - 1 ? currentIndex + 1 : 0;
}

function prevImage() {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : totalImages - 1;
}

let imageContainerWidth;
let rootImageRatio;

let rootImageWidth;
let rootImageHeight;

let getImageRatio = () => {
    return rootImageHeight / rootImageWidth
}

function setImageRatio(e) { 
    rootImageWidth = e.target.naturalWidth
    rootImageHeight = e.target.naturalHeight
    containerHeight = imageContainerWidth * getImageRatio()
}

$: containerHeight = imageContainerWidth * getImageRatio();

</script>

<svelte:head>
    <style>
        .gallery-image {
            cursor: pointer;
            margin: 0;
            max-width: 100%;
            height: auto;
            max-height: 100%;
            display: none;
        }

        .active-image {
            display: inline-block;
        }
        .image-gallery {
            max-width: 100%;
            /* position: relative; */
        }
        .gallery-display {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 640px;
        }

        label {
            font-size: 14px;
            line-height: 24px;
            display: block;
            opacity: 0.64;
            text-align: left;
        }
        .gallery-controls {
            padding: 8px;
        }

        .gallery-control {
            background-color: transparent;
            outline: none;
            border: none;
            cursor: pointer;
            display: block;
            flex: 1 1 0;
            opacity: 0.64;
            height: 32px;
        }

        @media (max-width: 600px) {
            .gallery-controls {
                display: None;
            }
            .gallery-display {
                /* flex-direction: column; */
                height: auto;
            }
        }
    </style>
</svelte:head>

<div class="image-gallery">
    <div 
        class="gallery-display" 
        bind:clientWidth={imageContainerWidth}
        style="height: {containerHeight}px;"
    >
        {#each images as image, i}
        {#if i === 0}
            <img 
                class="gallery-image{i === currentIndex ? ' active-image' : ''}" 
                on:click={nextImage} 
                src="{image.url}"
                alt="{exhibtionTitle} - {image.caption}"
                title="{exhibtionTitle} - {image.caption}"
                loading="lazy" 
                decoding="async"
                on:load={setImageRatio}
            /> 
        {:else}
            <img 
                class="gallery-image{i === currentIndex ? ' active-image' : ''}" 
                on:click={nextImage} 
                src="{image.url}"
                alt="{exhibtionTitle} - {image.caption}"
                title="{exhibtionTitle} - {image.caption}"
                loading="lazy" 
                decoding="async"
            /> 
        {/if}
        {/each}
    </div>
    <div class="flex-container gallery-controls">
        <button on:click={prevImage} style="text-align: left" class="gallery-control">
            <svg class="page-chevron" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="m14 18-6-6 6-6 1.4 1.4-4.6 4.6 4.6 4.6Z"/></svg>
        </button>
        <label class="image-label">[{currentIndex+1}/{totalImages}] {currentImageCaption}</label>
        <button on:click={nextImage} style="text-align: right" class="gallery-control">
            <svg class="page-chevron" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M9.4 18 8 16.6l4.6-4.6L8 7.4 9.4 6l6 6Z"/></svg>
        </button>
    </div>
</div>