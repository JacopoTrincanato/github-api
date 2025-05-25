export default function UserCard({ data }) {

    return (
        <>
            {data.map((user) => (

                <div key={user.id} className="card">
                    <img src={user.avatar_url} alt="" />
                    <h2 key={user.id}>{user.login}</h2>
                    <p>{user.type}</p>
                </div>
            ))}
        </>
    )
}