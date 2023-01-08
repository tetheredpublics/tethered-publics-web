<script>
	import SEO from '$lib/SEO.svelte';

	let feedItems = [
		{
			"item_id": "TZ5LoBmnao8gVGVMo2zeKH",
			"title": "Digitally Specific",
			"start_date": "2022-10-07T00:18:11+00:00",
			"end_date": null,
			"kind": "exhibition",
			"cover_url": "./images/digitally_specific.jpeg",
			"action": {
				"text": "Explore",
				"web_link": "./exhibitions/TZ5LoBmnao8gVGVMo2zeKH",
				"ios_link": null
			}
    	}
	];

	function formatItemLabel(item) {
		let now = new Date();
		console.log(now, new Date(item.start_date))
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
			<h1>Location-Based Digital Art. Just Launched in South London</h1>
			<p class="large-paragraph">
				We're exhibiting site-specific digital artworks. See our first exhibition Digitally
				Specific. Now available for Download.
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
<div class="section dim-bg">
	<div class="container">
		<!-- <h3 style="margin-top: 0;">What's Happening?</h3> -->
		<div class="feed-container">
		{#each feedItems as item}
			<div class="feed-item">
				<a style="display: inline-block;" href="{item.action.web_link}">
					<div>
						<label class="feed-item-label">{formatItemLabel(item)}</label>
						<img 
							class="feed-item-img" 
							src="{item.cover_url}" 
							title="{item.title}" alt="{item.title} - poster"
						/>
					</div>
				</a>
			</div>
		{/each}
		</div>
	</div>
</div>
