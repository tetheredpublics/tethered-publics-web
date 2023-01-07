let getExhibtions = () => {
    return {
        "exhibition_id": "TZ5LoBmnao8gVGVMo2zeKH",
        "title": "Digitally Specific",
        "description": "Introducing Digitally Specific, the first exhibition curated by and developed in conjunction with Tethered Publics, a mobile app for showcasing location based digital art.\r\n\r\nDigitally Specific is an artist-led exhibition which investigates ways of challenging contemporary notions of place, community and technology through the production and installation of site-specific digital artworks. Through augmented reality, video, code and geolocation technology, we invite you to delve into this hybrid experience of art and place. \r\n\r\nThe works of this show are exhibited in-app across the South London boroughs of Lewisham and Southwark, spotlighting contemporary artists working in the area. Looking to explore tensions between the ‘assimilative’ and ‘interruptive’ elements of site-specific art, Digitally Specific embellishes the streets, rather than gallery walls. The show aims to be at once harmonious, subversive and inclusive, and present a unique way to explore art and your environment.\r\n\r\nAbout Tethered Publics: \r\n\r\nTethered Publics is a platform for exploring location based digital art. Via its mobile app, it allows artists to exhibit their work through augmented reality, digital media and geolocation technology. Bypassing the confines and physicality of the traditional gallery, the Tethered Publics concept is simple - download the app to view art created in response to spaces near you. This innovative in-app viewing experience allows people to seek out artworks, or be notified when work is close by. Allowing people to curate their own art trail, or simply encounter art along their regular journeys. \r\n\r\nAcknowledgements:\r\n\r\nThis exhibition has been produced independently without external funding. Thanks goes to the artists involved for their collaboration and their contribution to the development of the app as a whole.",
        "start_date": "2022-10-07T00:18:11+00:00",
        "cover_image": {
            "url": "https://d34okymurzabo0.cloudfront.net/images/m256rGgK6kqJCiUsTDiv57-gK3Ah3WREK8Q4Kc3qo6BoF-digitallyspecificposter-45.jpeg",
            "role": "poster",
            "caption": ""
        },
        "curators": [{
            "full_name": "Tethered Publics",
            "website": "https://tetheredpublics.app",
            "instagram": ""
        }],
        "artists": [{
                "full_name": "Karl Sims",
                "website": "https://karlsims.uk",
                "instagram": "winston_jay"
            },
            {
                "full_name": "Daniele van Reusel",
                "website": "https://dvr.cargo.site/",
                "instagram": "danielevanreuselart"
            },
            {
                "full_name": "Andre de Jong",
                "website": "https://www.behance.net/andredejong",
                "instagram": ""
            },
            {
                "full_name": "Sophie Horton",
                "website": "http://sophiehorton.org",
                "instagram": "sophie_horton_art"
            },
            {
                "full_name": "Igor Pavlovic Pointet",
                "website": "https://linktr.ee/iipp",
                "instagram": "igorpavlovicpointet"
            },
            {
                "full_name": "Daniel Arteaga",
                "website": "http://danielarteaga.art",
                "instagram": "d.arteaga.f"
            },
            {
                "full_name": "Greg Orrom Swan",
                "website": "http://gregorromswan.co.uk",
                "instagram": "gregorromswan"
            },
            {
                "full_name": "Leon Clowes",
                "website": "https://www.leonclowes.com",
                "instagram": "leonclowes"
            },
            {
                "full_name": "Bob Bicknell-Knight",
                "website": "https://bobbicknell-knight.com",
                "instagram": "bob.bk1"
            }
        ],
        "images": [{
                "url": "https://d34okymurzabo0.cloudfront.net/images/m256rGgK6kqJCiUsTDiv57-gK3Ah3WREK8Q4Kc3qo6BoF-digitallyspecificposter-45.jpeg",
                "role": "poster",
                "caption": ""
            },
            {
                "url": "https://d34okymurzabo0.cloudfront.net/images/h6XvKsAZYHrj2kLz9wMi5e-leon-image.png",
                "role": "preview",
                "caption": "Artwork Preview"
            },
            {
                "url": "https://d34okymurzabo0.cloudfront.net/images/SYhU5Ds3tx9FDxZNXAmUfV-lewisham_location.jpg",
                "role": "location",
                "caption": "Location Preview"
            },
            {
                "url": "https://d34okymurzabo0.cloudfront.net/images/A8HSDsqCbP3WJQkdmA6zBG-Idelization-Daniel-Arteaga.jpg",
                "role": "preview",
                "caption": "Idealisation, 2022.  Digital Painting"
            },
            {
                "url": "https://d34okymurzabo0.cloudfront.net/images/JgJ7hMXw53vZWkcGWT78ny-sophie_preview.jpeg",
                "role": "preview",
                "caption": "Artwork Preview"
            },
            {
                "url": "https://d34okymurzabo0.cloudfront.net/images/cSAX7nSMzwnRreLqGDVxB3-andre_preview.jpeg",
                "role": "preview",
                "caption": "Artwork Preview"
            }
        ]
    }
}


/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    let exhibition = getExhibtions();

    let paragraphs = "<p>" +
        exhibition.description
        .split("\r\n")
        .map((v, i) => v.trim())
        .filter((v, i) => v !== "")
        .join("</p>\n<p>") +
        "</p>";
    exhibition.description = paragraphs;

    console.log(paragraphs)
        // todo: load from api
    return {
        exhibition: exhibition
    };
}