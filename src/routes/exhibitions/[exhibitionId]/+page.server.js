import { TP_ART_API_URL, TP_ART_API_KEY } from '$env/static/private';
import { compile } from 'mdsvex';

/**
 * @param {any} [exhibitionId]
 */
async function fetchExhibition(exhibitionId) {
    const response = await fetch(
        `${TP_ART_API_URL}/web/exhibitions/${exhibitionId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": TP_ART_API_KEY,
            },
        }
    );
    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    const exhibition = await response.json();
    exhibition.description = compileParagraphs(exhibition.description);
    return { exhibition: exhibition };
}


function compileParagraphs(text) {
    // TODO: use a lib for markdown format
    const inner = text
        .split("\r\n")
        .map((v, i) => v.trim())
        .filter((v, i) => v !== "")
        .join("</p>\n<p>")
    return `<p>${inner}</p>`
}

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    return fetchExhibition(params.exhibitionId)
        .catch(error => {
            console.log(error);
            throw error(404, 'Not found')
        });
}