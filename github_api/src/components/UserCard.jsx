export default function UserCard({ data }) {

    return (
        <>
            {data.map((user) => (
                <li key={user.id}>{user.login}</li>
            ))}
        </>
    )
}