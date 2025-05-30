import { useContext, useEffect, useState } from "react";
import GlobalContext from "../contexts/GlobalContext";
import useDebounce from "../custom_hooks/UseDebounce";

export default function SearchBar() {
    const options = ["Repositories", "Users"];
    const [searchText, setSearchText] = useState("");
    const { fetchData, selectedOption, setSelectedOption } = useContext(GlobalContext);
    const debouncedSearch = useDebounce(searchText);

    useEffect(() => {
        fetchData(debouncedSearch)
    }, [debouncedSearch, selectedOption])

    function handleFormSubmit(e) {
        e.preventDefault();
        fetchData(searchText)
    }

    return (
        <>
            <div>

                <form onSubmit={handleFormSubmit} className="d-flex align-items-center mb-4">
                    <input
                        type="search"
                        className="form-control"
                        placeholder="Cerca su GitHub..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />

                    <select
                        id="options"
                        className="form-select w-auto"
                        value={selectedOption}
                        onChange={(e) => setSelectedOption(e.target.value)}
                    >
                        {options.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                        ))}
                    </select>

                    <button type="submit" className="btn btn-light">Cerca</button>
                </form>

            </div>
        </>
    );
}

