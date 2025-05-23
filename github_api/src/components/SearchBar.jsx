import { useState } from "react";

export default function SearchBar() {
    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState("");

    function handleFormSubmit(e) {
        e.preventDefault();

        fetch(`https://api.github.com/search/repositories?q=${searchText}`, {
            headers: {
                "Authorization": `Bearer ${import.meta.env.VITE_API_TOKEN}`,
                "Accept": "application/vnd.github.v3+json",
                "X-GitHub-Api-Version": "2022-11-28"
            }
        })
            .then(response => {
                response.json();
            })
            .then(response => {
                setData(response);
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
                <button type="submit">Cerca</button>
            </form>

            <ul>
                {data && data.map(repo => (
                    <li key={repo.id}>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                            {repo.full_name}
                        </a>
                    </li>
                ))}
            </ul>
        </>
    );
}
