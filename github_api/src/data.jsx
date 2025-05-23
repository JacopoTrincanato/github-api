import config from "./config";

export default data = {
    params: {
        q: searchInput.value
    },
    headers: {
        "Authorization": `Bearer ${config.token}`,
        "X-GitHub-Api-Version": "2025-05-23"
    }
};