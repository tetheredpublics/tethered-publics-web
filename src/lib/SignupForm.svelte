<script>
    export let form;
</script>

<svelte:head>
    <style>
        .signup-btn {
            display: block;
            border: none;
            background-color: var(--tp-pink-dim);
            text-transform: uppercase;
            color: #fff;
            padding: 11px 24px;
            cursor: pointer;
            border-radius: 6px;
            line-height: 1.5rem;
            letter-spacing: 1.5px;
            border: 1px solid #000;
            color: #000;
            font-weight: bold;
        }

        .signup-input {
            display: block;
            outline: none;
            padding: 11px 16px;
            font: inherit;
            line-height: 1.5rem;
            border-radius: 6px;
            font-weight: 500;
            border: 1px solid #000;
            margin-right: 0.5rem;
            width: 100%;
            max-width: 256px;
        }

        .signup-fieldset {
            display: flex;
            align-items: center;
            justify-content: flex-start;
        }

        .signup-container {
            text-align: left;
            margin-right: 48px;
        }

        @media (max-width: 660px) {
            .signup-container {
                margin-bottom: 48px;
                margin-right: 0;
            }
        }
        
    </style>
</svelte:head>

{#if form?.success}
<h1>Thanks for all the fish!</h1>
<p>You can unsubscribe at anytime. Unsubscribe button at the bottom of every email</p>
<!-- <p><a style="text-decoration: underline;" href="/cheatcodes">Redeem your free cheat code</a></p> -->
{:else}
<div class="signup-container">
    <h4 class="signup-header">Join our Mailing List 🙌</h4>
    <p style="max-width: 480px;">
        Don't miss out on exhibitions, open calls and other opportunities. 
        100% good stuff, zero spam. Opt out at any time. 
        <!-- Limited offer: Get a free cheat code to access art anywhere. -->
    </p>
    <form method="POST" action="/signup">
        <fieldset class="signup-fieldset">
            <input class="signup-input" name="email" type="email" placeholder="Your Email..." required=true>
            <input class="signup-input" name="name" type="text" style="display:none">
            <button class="signup-btn">Signup</button>
        </fieldset>
    </form>
</div>
{/if}