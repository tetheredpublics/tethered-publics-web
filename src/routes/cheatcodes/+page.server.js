import { TP_CHEATCODE_API_URL, TP_CHEATCODE_API_KEY } from '$env/static/private'

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
    let tpCheatCode = cookies.get('tpCheatCode');
    console.log(tpCheatCode)
    return { code: tpCheatCode };
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async({ cookies, request }) => {
        const data = await request.formData();
        const email = data.get('email');

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
        if (response.status != 200) {
            return { success: false, message: "Could not find cheat code for email" }
        }

        let codeData = await response.json()
        cookies.set('tpCheatCode', codeData.code);

        return { success: true };
    }
};