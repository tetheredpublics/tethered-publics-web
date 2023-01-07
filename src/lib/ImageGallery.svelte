<script>
export let images;

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
</script>

<svelte:head>
    <style>
        .gallery-image {
            cursor: pointer;
            margin: 0;
            max-width: 100%;
            max-height: 100%;
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

        @media (max-width: 600px) {
            .gallery-display {
                height: 420px;
            }
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
    </style>
</svelte:head>

<div class="image-gallery">
    <div class="gallery-display">
        {#each images as image, i}
        <img 
            class="gallery-image" 
            on:click={nextImage} 
            src="{image.url}"
            loading="lazy" 
            decoding="async"
            style='display: {i !== currentIndex ? "none" : "block"}'
        /> 
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