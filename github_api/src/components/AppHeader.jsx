import SearchBar from "./SearchBar";

export default function AppHeader() {

    return (
        <>
            <header>
                <h1>GitHub Api</h1>
                <nav>
                    <SearchBar />
                </nav>
            </header>
        </>
    )
}