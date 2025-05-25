import { useContext } from "react";
import RepositoryCard from "./RepositoryCard";
import UserCard from "./UserCard";
import GlobalContext from "../contexts/GlobalContext";
import AppLoader from "../loaders/AppLoader";

export default function AppMain() {
    const { data, error, selectedOption, loading } = useContext(GlobalContext);

    return (
        <>

            {error && <div className="alert alert-danger text-center">{error}</div>}

            {loading ? (
                <div className="d-flex justify-content-center my-5">
                    <AppLoader />
                </div>
            ) : (
                <div className="container py-5">
                    {selectedOption === "Users"
                        ? <UserCard data={data} />
                        : <RepositoryCard data={data} />}
                </div>
            )}


        </>
    );
}
