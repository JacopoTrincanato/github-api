export default data = {
    params: {
        q: searchInput.value
    },
    headers: {
        "Authorization": `Bearer ${import.meta.env.API_TOKEN}`,
        "X-GitHub-Api-Version": "2025-05-23"
    }
};