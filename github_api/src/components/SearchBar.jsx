import { useState } from "react"
import config from "../config";

export default function SearchBar() {

    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState("");

    function handleFormSubmit(e) {
        e.preventDefault();

        fetch(`${config}&query=${searchText}`)
            .then(response => response.json())
            .then(response => {
                setData(response)
            })
            .catch((error) => console.error(error))
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="search"
                    placeholder="Search..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </form>
        </>
    )
}