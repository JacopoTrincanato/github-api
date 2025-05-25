import { useContext, useState } from "react";
import GlobalContext from "../contexts/GlobalContext";

export default function SearchBar() {
    const options = ["Repositories", "Users"];
    const [searchText, setSearchText] = useState("");
    const { fetchData, selectedOption, setSelectedOption } = useContext(GlobalContext);

    function handleFormSubmit(e) {
        e.preventDefault();
        fetchData(searchText);
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

            </div>
        </>
    );
}

