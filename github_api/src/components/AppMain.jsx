import { useContext } from "react";
import RepositoryCard from "./RepositoryCard";
import UserCard from "./UserCard";
import GlobalContext from "../contexts/GlobalContext";

export default function AppMain() {

    const [data, setData] = useContext(GlobalContext);

    return (
        <>
            <div className="container">
                {selectedOption === "Users"
                    ? <UserCard data={data} />
                    : <RepositoryCard data={data} />}

            </div>
        </>
    )
}