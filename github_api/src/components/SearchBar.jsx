import { useState } from "react";

export default function SearchBar() {
    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState("");

    //"repository_search_url": "https://api.github.com/search/repositories?q={query}{&page,per_page,sort,order}"
    //"user_organizations_url": "https://api.github.com/user/orgs"

    function handleFormSubmit(e) {
        e.preventDefault();

        fetch(`https://api.github.com/search/users?q=${searchText}`, {
            headers: {
                "Authorization": `Bearer ${import.meta.env.VITE_API_TOKEN}`,
                "Accept": "application/vnd.github.v3+json",
                "X-GitHub-Api-Version": "2022-11-28"
            }
        })
            .then(response => response.json())
            .then(response => {
                /*if (searchText.length <= 3) {
                    alert("Numero di caratteri insufficienti");
                } else {
                    setData(response.items);
                }*/
                setData(response.items);
            })
            .catch((error) => console.error("Errore:", error));
    }

    console.log(data);


    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="search"
                    placeholder="Cerca su GitHub..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />

                <select id="options">
                    <option value="">

                    </option>
                </select>
                <button type="submit">Cerca</button>
            </form>

            {/*<ul>
                {data && data.map(repo => (
                    <li key={repo.id}>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                            {repo.full_name}
                        </a>
                    </li>
                ))}
            </ul>*/}

            <ul>
                {data && data.map(user => (
                    <li key={user.id}>
                        {user.login}
                    </li>
                ))}
            </ul>
        </>
    );
}
