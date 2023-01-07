<script>
    import ContactForm from '../../lib/ContactForm.svelte';
</script>

<svelte:head>
    <style>
        
    </style>

</svelte:head>

<div class="header-spacer"></div>
<div class="section">
    <div class="container">
        <h1>Contact</h1>
        <div class="flex-container">
            <div class="flex-item">
                <p>Tethered publics is run by a small team of independent artists based in South London. We’re creating a platform for exploring location-based digital art and other emerging technologies.</p>
                <p>Currently we’re looking for artists, organisations, curators, developers, designers and other creatives to work with.</p>
                <p>If you would like to hear more about us, join our team, collaborate, or be involved in future projects, feel free to get in touch and we’ll try to get back to you in a timely mannor.</p>
            </div>
            <div class="flex-item">
                <ContactForm formName="Contact"/>
            </div>
        </div>
    </div>
</div>