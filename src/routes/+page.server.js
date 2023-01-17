import { TP_ART_API_URL, TP_ART_API_KEY } from '$env/static/private';


async function fetchFeed() {
    const response = await fetch(
        `${TP_ART_API_URL}/v1.2/feed`, {
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
    const feed = await response.json();
    return { feedItems: feed.items };
}

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    return fetchFeed()
        .catch(error => {
            console.log(error);
            return { feedItems: [] }
        });
}