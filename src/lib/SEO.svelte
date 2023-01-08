<script>
    // import website from '$lib/config/website';
   
    const siteTitle = "Tethered Publics";

    export let title;
    export let description = "Art app exhibiting location-based digital art. First exhibition now open in South East London. Download from the App Store.";
    export let image = "https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/eb/46/b9/eb46b9ac-8d7b-9c56-4d18-d7cdb407686f/AppIcon-1x_U007emarketing-0-7-0-85-220.png/540x540bb.jpg?h=085767d95f6f67223026827c745b7b95"
   
    const pageTitle = `${siteTitle} | ${title}`;
</script>
    
<svelte:head>
    <title>{pageTitle}</title>
    <meta name="description" content={description} />

    <meta property="og:title" content="{pageTitle}" />
    <meta property="og:description" content="{description}" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="{image}" />
    <meta property="og:locale" content="en_GB" />
    <meta property="og:site_name" content="{siteTitle}" />
</svelte:head>