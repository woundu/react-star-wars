

export const getApiResource = async (url) => {


    try {
        const res = await fetch(url);
        if (!res.ok) {
            console.error("Could not fetch" , res.status)
            return false;
        }
        return await res.json()


    } catch (error) {
        console.error("Could no fetch", error.message);
        return false;
    }
}

// (async () => {
//     const body = await getApiResource(SWAPI_ROOT + SWAPI_PEOPLE);
//     console.log(body);
// })();

