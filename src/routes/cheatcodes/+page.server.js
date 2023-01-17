import { TP_CHEATCODE_API_URL, TP_CHEATCODE_API_KEY } from '$env/static/private'

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
    let tpCheatCode = cookies.get('tpCheatCode');
    return { code: tpCheatCode };
}


/**
 * @param {any} email
 */
async function fetchCheatCode(email) {
    const response = await fetch(
        TP_CHEATCODE_API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "email": email,
                "token": TP_CHEATCODE_API_KEY,
            })
        }
    )
    if (!response.ok) {
        throw new Error(`An error has occured: ${response.status}`);
    }

    let codeResponse = await response.json()
    return codeResponse;
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async({ cookies, request }) => {
        const data = await request.formData();
        const email = data.get('email');

        if (!email) {
            console.log("missing email");
            return { success: false, message: "Missing Email" }
        }

        return fetchCheatCode(email)
            .then(response => {
                cookies.set('tpCheatCode', response.code);
                return { success: true };
            })
            .catch(error => {
                console.log(error);
                return { success: false, message: "Could not find cheat code for email" }
            })
    }
};