import { useState } from "react";
import GlobalContext from "./GlobalContext";

export default function GlobalProvider({ children }) {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [selectedOption, setSelectedOption] = useState("Repositories");
    const [loading, setLoading] = useState(false);

    function fetchData(searchText) {
        const endpoint =
            selectedOption === "Users"
                ? `https://api.github.com/search/users?q=${searchText}`
                : `https://api.github.com/search/repositories?q=${searchText}`;

        setLoading(true)

        //validazione minimale
        if (searchText.length < 3) {
            setError("Devi digitare almeno tre caratteri per effettuare la ricerca");
            setLoading(false)
        } else {
            fetch(endpoint, {
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
                    Accept: "application/vnd.github.v3+json",
                    "X-GitHub-Api-Version": "2022-11-28",
                },
            })
                .then((response) => response.json())
                .then((response) => {

                    setLoading(true)
                    if (response.items.length == 0) {
                        setError("Nessun risultato");
                        setData([]);
                        setLoading(false);
                    } else {
                        setData(response.items);
                        setError("");
                        setLoading(false);
                    }

                })
                .catch((error) => console.error("Errore:", error));
        }

    }

    return (
        <GlobalContext.Provider
            value={{
                data,
                setData,
                loading,
                error,
                selectedOption,
                setSelectedOption,
                fetchData
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}
