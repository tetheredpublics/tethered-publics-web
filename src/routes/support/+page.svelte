<!-- https://eternaldev.com/blog/how-to-build-contact-us-page-with-sveltekit-and-supabase/ -->
<script>
    /** @type {import('./$types').ActionData} */
    export let form;
</script>

<svelte:head>
    <style>
        form {
            width: 400px;
            max-width: 100%;
        }
        label {
            display: block;
            font-weight: 500;
        }
        input, textarea {
            width: 100%;
            padding: 8px;
            font: inherit;
            line-height: 1.5rem;
            border-radius: 6px;
            /* outline: none; */
            border: 1px solid #000;
        }
        textarea {
            resize: vertical;
        }

        .form-item, .g-recaptcha {
            margin-bottom: 1.5rem;
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
            /* width: 100%; */
        }

        .section {
            display: block;
        }
    </style>

    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
</svelte:head>

<div class="header-spacer"></div>
<div class="section">
    <div class="container" style="display: flex; flex-direction: column;">
        <h1>Contact Us</h1>
        {#if form?.success}
        <!-- this message is ephemeral; it exists because the page was rendered in
            response to a form submission. it will vanish if the user reloads -->
        <p class="post-message">Thanks for your message! We will get back to you as soon as we can. 🤝</p>
        {:else}
        <form method="POST" action="/support">
            <div class="form-item">
                <label for="email">
                    Your Email: <span aria-label="required">*</span>
                </label>
                <input name="email" type="email" required=true>
            </div>
            <div class="form-item">
                <label for="subject">
                    Subject: <span aria-label="required">*</span>
                </label>
                <input name="subject" type="text" required=true>
            </div>
            <div class="form-item">
                <label for="message">
                    Message: <span aria-label="required">*</span>
                </label>
                <textarea name="message" type="text" rows="4" required=true></textarea>
            </div>
            <div class="g-recaptcha" data-sitekey="6LfFzbAfAAAAAAIaot9iyKUV540KYrzxwyuHB_6c"></div>
            <div class="form-item">
                <button>Send</button>
            </div>
        </form>
        {/if}
    </div>
</div>