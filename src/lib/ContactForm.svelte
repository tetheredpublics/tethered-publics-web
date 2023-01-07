<script>
    import { onMount } from 'svelte';


    export let formName;

    let currentUrl = "";
    let hasSubmitted = false;

    onMount(() => {
        currentUrl = window.location.href.split('?')[0]

        const urlParams = new URLSearchParams(window.location.search);
        hasSubmitted = urlParams.has('submitted');
    });
</script>

<svelte:head>
    <style>
        form {
            /* width: 400px; */
            max-width: 100%;
        }
        label {
            display: block;
            font-weight: 500;
        }
        input, textarea {
            display: block;
            width: 100%;
            padding: 8px;
            font: inherit;
            line-height: 1.5rem;
            border-radius: 6px;
            /* outline: none; */
            border: 1px solid #000;
            margin-bottom: 1.5rem;
        }
        textarea {
            resize: vertical;
        }

        button {
            border: none;
            background-color: #000;
            color: #fff;
            padding: 16px 32px;
            cursor: pointer;
            border-radius: 6px;
            letter-spacing: 1.5px;
            font-weight: bold;
            margin-bottom: 1.5rem;
        }

        .section {
            display: block;
        }
    </style>
</svelte:head>

{#if hasSubmitted}
<p class="post-message">Thanks for your message! We will get back to you as soon as we can. 🤝</p>
{:else}
<form id="contact-form" action="https://api.staticforms.xyz/submit" method="post">
    <label for="name">
        Name: <span aria-label="required">*</span>
    </label>
    <input type="text" name="name" placeholder="Your Name">
    <label for="email">
        Email: <span aria-label="required">*</span>
    </label>
    <input type="text" name="email" placeholder="Your Email" />
    <label for="$user-subject">
        Subject: <span aria-label="required">*</span>
    </label>
    <input type="text" name="$user-subject" placeholder="E.g. why I love your app so much">
    <label for="message">
        Message: <span aria-label="required">*</span>
    </label>
    <textarea name="message" type="text" rows="4" required=true></textarea>
    <input type="text" name="honeypot" style="display:none">
    <input type="hidden" name="accessKey" value="3594fe96-6016-4e31-9cf9-da5db6e9f083">
    <input type="hidden" name="subject" value="{formName} from - tetheredpublics.app" />
    <input type="hidden" name="replyTo" value="@">
    <input type="hidden" name="redirectTo" value="{currentUrl}?submitted=true">
    <button type="submit">Send</button>
</form>
{/if}