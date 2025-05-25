import { useState } from "react";

export default function SearchBar() {
    const [searchText, setSearchText] = useState("");
    const [selectedOption, setSelectedOption] = useState("Repositories");
    const options = ["Repositories", "Users"];
    const [error, setError] = useState("");

    function handleFormSubmit(e) {
        e.preventDefault();
        fetchData();
    }

    return (
        <>
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

            </div>
        </>
    );
}

