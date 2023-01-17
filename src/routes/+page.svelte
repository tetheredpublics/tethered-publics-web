<script>
	import SEO from '$lib/SEO.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	function formatItemLabel(item) {
		let now = new Date();
		if (item.end_date &&  now > new Date(item.end_date)) {
			return `past ${item.kind}`
		}
		if (now > new Date(item.start_date)) {
			return `current ${item.kind}`
		}
		return `upcoming ${item.kind}`
	}
</script>
<SEO title="Location-Based Digital Art" />

<div class="section map-bg">
	<div class="container hero">
		<div class="hero-item first">
			<img class="hero-img" src="./images/iphone12caseshotmap.png"/>
		</div>
		<div class="hero-item">
			<h1 style="font-weight: 600;">Explore Location-Based Digital Art.</h1>
			<p class="large-paragraph">
				Art app exhibiting site-specific digital artworks. Now available for download on IOS. 
				See our first exhibition Digitally Specific.
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
		<!-- <h1 style="margin-top: 0;">Whats Happening</h1> -->
		<div class="feed-container">
		{#each data.feedItems as item}
			<div class="feed-item">
				<a style="display: inline-block;" href="{item.action.web_link}">
					<div>
						<label style="padding: 4px 0;" class="feed-item-label">{formatItemLabel(item)}</label>
						<img 
							class="feed-item-img" 
							src="{item.poster_image_url}" 
							title="{item.title}" alt="{item.title} - poster"
						/>
					</div>
				</a>
			</div>
		{/each}
		</div>
	</div>
</div>
{/if}