<script>
    import ContactForm from '$lib/ContactForm.svelte';
    import SEO from '$lib/SEO.svelte';
</script>
<SEO 
    title="Support" 
    description="Contact our app support to report any problems, bugs or improvements."
/>

<div class="header-spacer"></div>
<div class="section">
    <div class="container">
        <div style="width: 560px; max-width: 100%; margin: auto;">
        <h1>Support</h1>
        <p>If you want to report a problem with the app, suggest some improvements, or have any
            ideas for new features, please contact us by the form bellow.</p>
        <ContactForm formName="Support"/>
        </div>
    </div>
</div>