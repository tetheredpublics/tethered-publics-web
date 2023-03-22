<script>
	import SEO from '$lib/SEO.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	function formatItemLabel(item) {
		let now = new Date();
		console.log(now, new Date(item.start_date));
		if (item.end_date && now > new Date(item.end_date)) {
			return `past ${item.kind}`;
		}
		if (now > new Date(item.start_date)) {
			return `current ${item.kind}`;
		}
		return `upcoming ${item.kind}`;
	}
	let heroImages = [
		'/images/iphone-12-shot-greg.png',
		'/images/iphone-12-shot-map.png',
		'/images/iphone-12-to.png',
		'/images/iphone-12-at.png'
	];
	let heroImageIndex = 0;
	let nextHeroImageIndex = 1;
	$: heroImage = heroImages[heroImageIndex];
	$: nextHeroImage = heroImages[nextHeroImageIndex];
	let nextOpacity = 0;

	function getNextHeroImageIndex() {
		return heroImageIndex < heroImages.length - 1 ? heroImageIndex + 1 : 0;
	}
	function setNextHeroImage() {
		nextOpacity = 1;
		heroImageIndex = getNextHeroImageIndex();
		setTimeout(() => {
			nextHeroImageIndex = getNextHeroImageIndex();
			nextOpacity = 0;
		}, 300);
	}
	let interval = setInterval(setNextHeroImage, 2500);

	function clickNextImage() {
		if (interval) {
			clearInterval(interval);
		}
		console.log('clicked');
		setNextHeroImage();
	}
</script>

<SEO title="Location-Based Digital Art" />
<svelte:head>
	<style>
		.hero-img {
			transition: opacity 0.3s;
			cursor: pointer;
		}
	</style>
</svelte:head>

<div class="section map-bg">
	<div class="container hero">
		<div class="hero-item first">
			<div style="position: relative">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img style="position: relative" class="hero-img" src={nextHeroImage} />
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-missing-attribute -->
				<img
					on:click={clickNextImage}
					style="position: absolute; top: 0; left: 0; right: 0; opacity: {nextOpacity};"
					class="hero-img"
					src={heroImage}
				/>
			</div>
		</div>
		<div class="hero-item">
			<h1 style="font-weight: 600;">Explore Location-Based Digital Art.</h1>
			<p class="large-paragraph">
				Art app exhibiting site-specific digital artworks. Now available for download on IOS. See
				our first exhibition Digitally Specific today.
			</p>
			<a
				href="https://apps.apple.com/gb/app/tethered-publics/id1634618407?itsct=apps_box_badge&amp;itscg=30200"
				style="display: inline-block; overflow: hidden; height: 56px; margin-bottom: 32px"
				><img
					src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1665100800?h=4f1c99d3c6ef0f8d892b640ee9e327cf"
					alt="Download on the App Store"
					style="height: 56px;"
				/></a
			>
		</div>
	</div>
</div>
{#if data?.feedItems}
	<div class="section dim-bg">
		<div class="container">
			<div class="feed-container">
				{#each data.feedItems as item}
					<div class="feed-item">
						<a style="display: inline-block;" href={item.action.web_link}>
							<div>
								<!-- svelte-ignore a11y-label-has-associated-control -->
								<label style="padding: 4px 0;" class="feed-item-label"
									>{formatItemLabel(item)}</label
								>
								<img
									class="feed-item-img"
									src={item.poster_image_url}
									title={item.title}
									alt="{item.title} - poster"
								/>
							</div>
						</a>
					</div>
				{/each}
			</div>
		</div>
	</div>
{/if}
