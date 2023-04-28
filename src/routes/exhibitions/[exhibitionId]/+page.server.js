import { TP_ART_API_URL, TP_ART_API_KEY } from '$env/static/private';
import { compile } from 'mdsvex';


/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    return fetchExhibition(params.exhibitionId)
        .catch(error => {
            console.log("whats happening")
            console.log(error);
            throw error(404, 'Not found')
        });
}


/**
 * @param {any} [exhibitionId]
 */
async function fetchExhibition(exhibitionId) {
    const response = await fetch(
            `${TP_ART_API_URL}/api/2/exhibitions/${exhibitionId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "tp-api-key": TP_ART_API_KEY,
                "tp-client-version": "platform=web,version=0,env=prod",
            },
        }
    );
    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    const exhibition = await response.json();
    return { exhibition: exhibition };
}