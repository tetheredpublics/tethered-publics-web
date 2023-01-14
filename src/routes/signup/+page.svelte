<script>
    /** @type {import('./$types').ActionData} */
    export let form;
    
    import SignupForm from '$lib/SignupForm.svelte';
</script>
<div class="section">
    <div class="container">
        <SignupForm form={form}/>
    </div>
</div>