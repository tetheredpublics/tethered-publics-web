import { MAILCHIMP_BASE_URL, MAILCHIMP_LIST_ID, MAILCHIMP_KEY } from '$env/static/private'


/** @type {import('./$types').Actions} */
export const actions = {
    default: async({ cookies, request }) => {
        const data = await request.formData();
        const subscriberEmail = data.get('email');
        const honeypot = data.get('name');
        const recaptchaResponse = data.get('g-recaptcha-response')

        if (honeypot !== "") {
            return { success: true };
        }

        if (!subscriberEmail) {
			return fail(400, { subscriberEmail, missing: true });
        }

        const response = await fetch(
            `${MAILCHIMP_BASE_URL}/lists/${MAILCHIMP_LIST_ID}/members`,
            {
                method: 'POST',
                headers: { 
                    "Content-Type": "application/json",
                    'Authorization': `Basic ${btoa(`key:${MAILCHIMP_KEY}`)}`
                },
                body: JSON.stringify({
                    "email_address": subscriberEmail,
                    "status": "subscribed",
                    "tags": ["website_signup"],
                })
            }
        )
        const result = await response.json()
        // https://kit.svelte.dev/docs/form-actions
        console.log("sent form");
        return { success: true };
    }
};