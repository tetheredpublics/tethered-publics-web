<script>
// @ts-nocheck

	import InlineArtistList from '$lib/InlineArtistList.svelte';
	import ImageGallery from '$lib/ImageGallery.svelte';
	import SEO from '$lib/SEO.svelte';
	import { PUBLIC_TP_APP_URL } from '$env/static/public';

	/** @type {import('./$types').PageData} */
	export let data;

	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];
	let exhibitionDate = new Date(data.exhibition.start_date);

	let formattedExhibitionDate = `${
		months[exhibitionDate.getMonth()]
	}, ${exhibitionDate.getFullYear()}`;

	let scrollPosition;
	let mainContainerHeight;
	let currentWindowHeight;
	let spacerHeight;

	$: buttonPosition =
		scrollPosition + currentWindowHeight - spacerHeight > mainContainerHeight
			? 'absolute'
			: 'fixed';

	let poster = data.exhibition.images.find(x => x.role == 'poster')
</script>

<SEO
	title="{data.exhibition.title} - Digital Art Exhibition"
	description={data.exhibition.blurb}
	image={data.exhibition.cover_image_url}
/>

<svelte:head>
	<style>

		.exhibition-title {
			font-weight: 600;
		}
		.exhibition-subtitle {
			/* margin-top: 1rem; */
			opacity: 0.64;
		}

		hr {
			margin: 0 0 2.5rem 0;
		}

		.mobile-feed,
		.mobile-poster {
			display: none;
		}

		@media (max-width: 680px) {
			.mobile-feed,
			.mobile-poster {
				display: block;
			}
		}

		.mobile-feed-image {
			margin-bottom: 1.5rem;
		}

		.image-label {
			font-size: 13px;
			line-height: 24px;
			display: block;
			opacity: 0.5;
			text-align: left;
		}
		.display-img {
			display: block;
		}
	</style>
</svelte:head>
<svelte:window bind:innerHeight={currentWindowHeight} bind:scrollY={scrollPosition} />

<!-- var now = new Date().valueOf();
setTimeout(function () {
    if (new Date().valueOf() - now > 100) return;
    window.location = "https://itunes.apple.com/appdir";
}, 25);
window.location = "appname://"; -->

<div class="header-spacer" bind:clientHeight={spacerHeight} />
<div class="section" bind:clientHeight={mainContainerHeight}>
	<div class="container">
		<div class="flex-container">
			<div class="flex-item">
				<img
					src={poster.uri}
					alt="{data.exhibition.title} - {poster.label}"
					title="{data.exhibition.title} - {poster.label}"
					class="display-img"
					loading="lazy"
					decoding="async"
				/>
				<span class="image-label">{data.exhibition.title}: {poster.label}</span>
			</div>
			<div class="flex-item">
				<h1 class="exhibition-title">{data.exhibition.title}</h1>
				<h5 class="exhibition-subtitle">
					<InlineArtistList artists={data.exhibition.curators} showsHover={false} />.
					{formattedExhibitionDate}
				</h5>
				<p style="columns: 3; margin-bottom: 2rem"><InlineArtistList artists={data.exhibition.artists} /></p>
				<hr />
				{#each data.exhibition.description as paragraph}
					<p>{paragraph}</p>
				{/each}
				<a style="display: inline-block;" href="/download" target="_blank" rel="noreferrer">
					<button style="position: {buttonPosition};" class="action-button light fixed-btn"
						>View in-App</button
					>
				</a>
			</div>
			<div class="flex-item mobile-feed">
				<!-- {#each data.exhibition.images as image}
					<div class="mobile-feed-image">
						<img
							style="display: block;"
							src={image.uri}
							alt="{data.exhibition.title} - {image.caption}"
							title="{data.exhibition.title} - {image.caption}"
							loading="lazy"
							decoding="async"
						/>
						<label class="image-label" style="padding: 4px 0;">{image.caption}</label>
					</div>
				{/each} -->
			</div>
		</div>
		<div class="spacer" />
	</div>
</div>
