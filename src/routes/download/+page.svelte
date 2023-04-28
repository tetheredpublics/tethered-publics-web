<script>
	import SEO from '$lib/SEO.svelte';
	import { PUBLIC_TP_APP_URL } from '$env/static/public';
	import { onMount } from 'svelte';

	const isMobile = {
		Android: function () {
			return window.navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function () {
			return window.navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function () {
			return window.navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function () {
			return window.navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function () {
			return (
				window.navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i)
			);
		},
		any: function () {
			return (
				isMobile.Android() ||
				isMobile.BlackBerry() ||
				isMobile.iOS() ||
				isMobile.Opera() ||
				isMobile.Windows()
			);
		}
	};

	onMount(() => {
		if (isMobile.iOS()) {
			window.location.replace(PUBLIC_TP_APP_URL);
		}
	});
</script>

<svelte:window />

<SEO title="Download" />

<div class="header-spacer" />
<div class="container">
	<div class="flex-container" style="justify-content: center">
		<div class="flex-item">
			<h2>App Store</h2>
			<img
				title="IOS QR code downlaod link"
				alt="IOS QR code downlaod link"
				src="/images/ios-qr-code.jpeg"
			/>
			<p>
				Scan the QR code to open on your iPhone
				<br/>
				<a style="color: blue;" href="https://apps.apple.com/gb/app/tethered-publics/id1634618407?ign-itscg=30200&ign-itsct=apps_box_link"
				target="_blank" rel="noreferrer">
				Open in the App Store
				</a>
			</p>
		</div>
		<div class="flex-item">
			<h2>Google Play</h2>
			<p class="large-paragraph">Android App Coming Soon...</p>
		</div>
	</div>
</div>
