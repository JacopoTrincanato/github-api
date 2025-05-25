import { useContext } from "react";
import RepositoryCard from "./RepositoryCard";
import UserCard from "./UserCard";
import GlobalContext from "../contexts/GlobalContext";
import AppLoader from "../loaders/AppLoader";

export default function AppMain() {

    const { data, error, selectedOption, loading } = useContext(GlobalContext);

    return (
        <>
            <div>{error}</div>

            {loading && loading ? <AppLoader /> :
                <div className="container">
                    <div className="row">
                        <div className="col">
                            {selectedOption === "Users"
                                ? <UserCard data={data} />
                                : <RepositoryCard data={data} />}
                        </div>
                    </div>

                </div>}
        </>
    )
}