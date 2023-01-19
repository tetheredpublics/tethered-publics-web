import { TP_ART_API_URL, TP_ART_API_KEY } from '$env/static/private';

const tempFeedItems = [{
    "item_id": "None",
    "title": "Home Collection 2023",
    "start_date": "2022-01-16T00:18:11+00:00",
    "end_date": null,
    "kind": "opportunity",
    "poster_image_url": "./images/opencall-posterb-v1.jpg",
    "action": {
        "text": "Apply",
        "web_link": "/opportunities/home-collection-open-call",
        "ios_link": null
    }
}]

function applyTempFeedItems(feed) {
    console.log(feed)
    return tempFeedItems.concat(feed);
}

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
    return { feedItems: applyTempFeedItems(feed.items) };
}

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    return fetchFeed()
        .catch(error => {
            console.log(error);
            return { feedItems: [] }
        });
}