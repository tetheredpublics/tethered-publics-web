<script>
    import { PUBLIC_TP_APP_URL } from '$env/static/public';
    import SignupForm from '$lib/SignupForm.svelte';

    /** @type {import('./$types').ActionData} */
    export let form;
    export let mobileNavVisable = false;

    let windowInnerWidth = 0;
    let mobileViewPortSize = 660

    function toggleNav() {
        mobileNavVisable = !mobileNavVisable
    }

    $: shouldShowNav = windowInnerWidth > mobileViewPortSize || mobileNavVisable

</script>

<svelte:window bind:innerWidth={windowInnerWidth} />

<header>
    <div class="header-container">
        <h1 class="logo"><a href="/">Tethered Publics</a></h1>
        {#if shouldShowNav}
        <nav hidden="{shouldShowNav}" id="main-nav">
            <a on:click={toggleNav} hidden={shouldShowNav} class="nav-link" href="/">Home</a>
            <a on:click="{toggleNav}" 
                class="nav-link" 
                target="_blank" 
                rel="noreferrer" 
                href="{PUBLIC_TP_APP_URL}"
            >Download</a>
            <a on:click="{toggleNav}" class="nav-link" href="/about">About</a>
            <a on:click="{toggleNav}" class="nav-link" href="/contact">Contact</a>
        </nav>
        {/if}
        <div class="nav-bar-btn">
            <svg class="nav-bar-icon" on:click="{toggleNav}" xmlns="http://www.w3.org/2000/svg">
                {#if !mobileNavVisable}
                <path d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z"/>
                {:else}
                <path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"/>
                {/if}
            </svg>
        </div>
    </div>
</header>

<slot></slot>

<footer>

    <div class="footer-banner">
        <div class="flex-container" style="flex-wrap: nowrap;">
            <SignupForm form={form}/>
            <div>
                <div class="footer-message">
                    <h4>Download Tethered Publics to View the Art!</h4>
                </div>
                <a href="https://apps.apple.com/gb/app/tethered-publics/id1634618407?itsct=apps_box_badge&amp;itscg=30200" style="display: inline-block; overflow: hidden; height: 48px;">
                    <img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/white/en-us?size=250x83&amp;releaseDate=1665100800?h=dcb22a6433c4aa556ff0d7bccb6ba928" alt="Download on the App Store" style="height: 48px;">
                </a>
            </div>
        </div>
    </div>
    <div class="footer-container">
        <div class="footer-left">
            <div class="copyright">© Tethered Publics 2022</div>
            <ul class="footer-links">
                <li><a class="footer-link" href="/privacy">Privacy</a></li>
                <li><a class="footer-link" href="/support">Support</a></li>
            </ul>
        </div>
        <div class="social-icons">
            <a class="social-icon-link" href="https://www.instagram.com/tetheredpublics/" taget="_blank">
                <svg class="social-icon" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
                <path
                    d="m 265.93,64 c -41.667,1.375 -84.183,-3.251 -125.086,6.62 -40.578,9.984 -70.111,47.801 -73.974,88.801 -4.638,50.316 -2.221,100.998 -2.387,151.461 -0.13,35.781 3.377,75.54 29.696,102.571 26.992,30.526 70.203,34.851 108.429,34.06 51.153,0.126 102.552,2.098 153.519,-2.913 39.308,-5.052 74.901,-33.599 84.896,-72.546 9.743,-37.854 5.561,-77.469 6.977,-116.135 -1.503,-39.853 3.194,-80.889 -8.106,-119.676 -11.48,-38.58 -48.197,-65.647 -87.639,-69.523 -28.631,-3.127 -57.567,-2.34 -86.324,-2.72 z m -30.994,34.377 c 40.692,1.041 81.831,-2.334 122.195,4.027 27.079,4.842 48.722,27.65 52.884,54.725 5.423,39.468 2.928,79.585 3.602,119.335 -1.931,32.303 3.528,66.492 -9.587,97.085 -11.821,27.14 -42.43,38.798 -70.315,38.825 -52.965,1.631 -106.056,1.888 -159.003,-0.245 -28.757,-0.263 -59.374,-15.308 -68.969,-43.925 -10.145,-32.022 -6.293,-66.255 -7.21,-99.36 0.658,-38.302 -2.245,-77.064 4.145,-114.983 5.342,-29.297 31.986,-50.471 60.987,-53.027 23.622,-2.633 47.537,-2.147 71.272,-2.457 z m 122.951,32.38 c -19.563,-0.758 -30.439,26.323 -15.751,39.304 13.259,14.58 40.231,3.133 39.072,-16.5 0.246,-12.423 -10.968,-23.203 -23.321,-22.804 z m -100.311,26.777 c -38.532,-0.791 -76.376,22.386 -91.331,58.265 -21.747,44.612 -1.617,103.134 41.978,126.287 41.974,24.313 100.227,11.204 127.711,-28.696 29.712,-39.463 22.664,-100.415 -15.507,-131.922 -17.255,-15.073 -39.912,-23.824 -62.851,-23.934 z m -1.067,34.281 c 36.069,-0.829 67.125,33.32 63.491,69.11 -1.715,38.865 -44.436,68.767 -81.579,56.709 -36.64,-9.135 -57.429,-53.986 -40.946,-87.883 9.99,-22.905 34.017,-38.439 59.034,-37.936 z"
                    style="fill:#ffffff"/>
                </svg>
            </a>
            <a class="social-icon-link" href="https://www.facebook.com/TetheredPublics/" taget="_blank">
                <svg class="social-icon" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
                <path
                    d="M 350.912,71.615 C 340.532,69.394 330.697,67.581 321.405,66.176 312.113,64.771 302.005,64.046 291.082,64 c -31.819,0.136 -54.799,7.479 -68.941,22.028 -14.142,14.55 -21.077,35.49 -20.804,62.822 l 0,39.705 -40.249,0 0,64.181 40.249,0 0,195.263 78.323,0 0,-195.263 57.11,0 5.439,-64.181 -62.55,0 0,-31.003 c -0.453,-8.793 0.861,-15.682 3.943,-20.669 3.082,-4.986 10.651,-7.524 22.708,-7.615 4.816,0.023 10.413,0.386 16.793,1.088 6.379,0.703 12.385,1.609 18.017,2.72 z"
                    style="fill:#ffffff"/>
                </svg>
            </a>

            <a class="social-icon-link" href="https://twitter.com/TetheredPublics" taget="_blank">
                <svg class="social-icon" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
                <path
                    d="m 448,136.906 c -14.127,6.267 -29.313,10.5 -45.247,12.405 16.262,-9.75 28.756,-25.188 34.639,-43.586 -15.224,9.03 -32.083,15.585 -50.029,19.117 -14.369,-15.312 -34.844,-24.877 -57.504,-24.877 -43.507,0 -78.783,35.272 -78.783,78.78 0,6.175 0.697,12.188 2.04,17.954 -65.475,-3.285 -123.527,-34.65 -162.382,-82.314 -6.782,11.635 -10.667,25.169 -10.667,39.608 0,27.333 13.908,51.446 35.048,65.574 -12.914,-0.409 -25.063,-3.953 -35.684,-9.853 -0.007,0.328 -0.007,0.657 -0.007,0.991 0,38.17 27.157,70.01 63.196,77.25 -6.61,1.8 -13.57,2.764 -20.755,2.764 -5.077,0 -10.012,-0.495 -14.823,-1.414 10.025,31.298 39.12,54.077 73.594,54.71 -26.962,21.132 -60.931,33.727 -97.843,33.727 -6.359,0 -12.631,-0.374 -18.794,-1.102 34.865,22.352 76.276,35.397 120.766,35.397 144.909,0 224.153,-120.046 224.153,-224.154 0,-3.416 -0.079,-6.812 -0.23,-10.191 15.395,-11.109 28.75,-24.983 39.312,-40.783"
                    style="fill:#ffffff"/>
                </svg>
            </a>
        </div>
</footer>