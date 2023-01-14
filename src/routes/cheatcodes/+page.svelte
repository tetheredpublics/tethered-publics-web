<script>
    /** @type {import('./$types').ActionData} */
    export let form;

    /** @type {import('./$types').PageData} */
    export let data;

    let showCopyMessage = true;
    function copyCode(e) {
        showCopyMessage = false;
        navigator.clipboard.writeText(data.code);
        setTimeout(() => {
            showCopyMessage = true;
        }, 1000);
    }
</script>
<svelte:head>
    <style>
        form {
            /* width: 400px; */
            max-width: 100%;
        }
        .redeem-btn {
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
            white-space: nowrap;
        }

        .redeem-input, .cheatcode {
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

        .cheatcode:active, .redeem-btn:active {
            background-color: #dbdbdb;
        }

        .redeem-fieldset {
            display: flex;
            align-items: center;
            justify-content: flex-start;
        }

        form {
            margin-bottom: 32px;
        }

        .cheatcode {
            background-color: #fafafa;
            font-family: monospace;
            font-size: 24px;
        }

        h1 {
            margin-bottom: 32px;
        }

        .instruction-image {
            width: 320px;
            max-width: 100%;
            display: block;
            margin-bottom: 2rem;
            border: 1px solid rgba(0,0,0,0.16);
        }

        .section {
            min-height: 0 !important;
        }

        .instruction-container {
            font-size: 18px;
            margin-bottom: 48px;
        }

        .instruction-container a {
            text-decoration: underline;
        }

        .instruction-item {
            max-width: 556px;
        }

        .copy-message {
            background-color: black; 
            color: white;
            position: absolute;
        }

        @media (max-width: 680px) {
            .instruction_item {
                flex: initial;
            } 
            p {
                max-width: 100%;
            }
            .instruction-image {
                width: auto;
                max-width: 100%;
            }
            .instruction-item {
                margin-right: 0;
            }
        }
    </style>
</svelte:head>
<div class="header-spacer"></div>
<div class="section">
    <div class="container">
        <h1>
            {#if data.code === undefined}Get{/if}
            Your Cheat Code
        </h1>
        {#if data.code !== undefined}
            <div style="display: flex; justify-content: flex-start;">
                <code id="cheatcode" on:click={copyCode} class="cheatcode">{data.code}</code>
                <button class="redeem-btn" on:click={copyCode}>Copy</button>
            </div>
            <p class="copy-message" hidden={showCopyMessage}>Code Copied!</p>
        {:else}
            <p style="max-width: 556px;">
                Enter the same email address your Ko-Fi account that was used to purchase the cheat code. 
                Orm if you signed up for notifications during the limited offer, use that email address.
            </p>
            <form method="POST">
                <fieldset class="redeem-fieldset">
                    <input class="redeem-input" name="email" type="email" placeholder="Enter Your Email..." required=true>
                    <button class="redeem-btn">Redeem Code</button>
                </fieldset>
            </form>
            {#if form?.success === false}
            <p class="post-message">Failed - {form?.message} 😞</p>
            {/if}
        {/if}
    </div>
</div>
<div class="section dim-bg">
    <div class="container">
        <h1>Redeeming Your Cheat Code</h1>
        <div class="instruction-container">
            <div class="instruction-item">
                <p>
                    If you haven't already, 
                    <a href="https://apps.apple.com/gb/app/tethered-publics/id1634618407?ign-itscg=30200&ign-itsct=apps_box_link">
                        download and install the Tethered Publics IOS app.
                    </a>
                    Your cheat code is one time redeemable and tied to the first device you activate it from.
                    If you have any issues, don't hesitate to 
                    <a href="/contact">get in touch</a> and we'll be happy to help.
                </p>
            </div>
        </div>
        <h2>Entering your code in the app</h2>
        <div class="instruction-container">
            <div class="instruction-item">
                <p>Click the hamburger button to get to the apps menu page.</p>
            </div>
            <div class="instruction-item">
                <img class="instruction-image" src="./images/instructions/cheatcodes/step_1.jpg"/>
            </div>
        </div>
        <div class="instruction-container">
            <div class="instruction-item">
                <p>Click "Enter a Cheat Code"</p>
            </div>
            <div class="instruction-item">
                <img class="instruction-image" src="./images/instructions/cheatcodes/step_2.jpg"/>
            </div>
        </div>
        <div class="instruction-container">
            <div class="instruction-item">
                <p>Copy your code into the box and click submit. 
                    If it works, you'll see a success message. 
                    If your entered incorrectly you'll see an error.
                </p>
            </div>
            <div class="instruction-item">
                <img class="instruction-image" src="./images/instructions/cheatcodes/step_3.jpg"/>
            </div>
        </div>
        <div class="instruction-container">
            <div class="instruction-item">
                <p>
                    When you scroll to the bottom of the menu page you should now see a "Cheat Modes" section.
                    Click the "Art Always Available" toggle so the switch turns black to activate this mode.
                </p>
            </div>
            <div class="instruction-item">
                <img class="instruction-image" src="./images/instructions/cheatcodes/step_4.jpg"/>
            </div>

            <div class="instruction-item">
                <p>
                    Congratulations 🥳 Now you're able to experience any artwork in the app from any location.
                </p>
            </div>
        </div>
    </div>
</div>