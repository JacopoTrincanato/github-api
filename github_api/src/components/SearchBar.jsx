import { useState } from "react";
import AppLoader from "../loaders/AppLoader";
import RepositoryCard from "./RepositoryCard";
import UserCard from "./UserCard";

export default function SearchBar() {
    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [selectedOption, setSelectedOption] = useState("Repositories");
    const options = ["Repositories", "Users"];
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    function handleFormSubmit(e) {
        e.preventDefault();
        fetchData();
    }

    function fetchData() {
        const endpoint =
            selectedOption === "Users"
                ? `https://api.github.com/search/users?q=${searchText}`
                : `https://api.github.com/search/repositories?q=${searchText}`;

        setLoading(true)

        fetch(endpoint, {
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
                Accept: "application/vnd.github.v3+json",
                "X-GitHub-Api-Version": "2022-11-28",
            },
        })
            .then((response) => response.json())
            .then((response) => {

                //validazione minimale
                if (searchText.length < 3) {
                    setError("Devi digitare almeno tre caratteri per effettuare la ricerca")
                }

                if (response.items.length == 0) {
                    setError("Nessun risultato")
                    setData([])
                } else {
                    setData(response.items);
                    setError("");
                    setLoading(false)
                }

            })
            .catch((error) => console.error("Errore:", error));
    }

    return (
        <>

            {loading ? <AppLoader /> :

                <div>
                    <form onSubmit={handleFormSubmit}>

                        <input
                            type="search"
                            placeholder="Cerca su GitHub..."
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />

                        <select
                            id="options"
                            value={selectedOption}
                            onChange={(e) => setSelectedOption(e.target.value)}
                        >
                            {options.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>

                        <button type="submit">Cerca</button>

                    </form>

                    <div>{error}</div>

                    <ul>

                        {selectedOption === "Users"
                            ? <UserCard data={data} />
                            : <RepositoryCard data={data} />}

                    </ul>
                </div>}

        </>
    );
}

