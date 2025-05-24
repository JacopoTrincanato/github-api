export default function RepositoryCard({ data }) {

    return (
        <>
            {data.map((repo) => (
                <li key={repo.id}>
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                        {repo.full_name}
                    </a>
                </li>
            ))}
        </>
    )
}