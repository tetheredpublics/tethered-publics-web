import { MAILCHIMP_KEY, MAILCHIMP_BASE_URL, MAILCHIMP_LIST_ID } from '$env/static/private'


async function getRecaptchaValidation(recaptchaResponse) {
    let secret = "6LdNQNsjAAAAAGcKom1kdaql7K_Gj6pWUxY3N6hf"
    const response = await fetch(
        "https://www.google.com/recaptcha/api/siteverify", {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `secret=${secret}&response=${recaptchaResponse}`
        }
    )
    return response.json()
}


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

        // let verifyResponse = await getRecaptchaValidation(recaptchaResponse);
        // if (verifyResponse.success !== true) {
        //     console.log("failed catch");
        //     return { success: false };
        // }
        // console.log("...x")


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