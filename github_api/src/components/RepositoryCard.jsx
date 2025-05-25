export default function RepositoryCard({ data }) {

    return (
        <>
            {data.map((repo) => (
                <div key={repo.id} className="card">
                    <h2>{repo.full_name}</h2>
                    <p>{repo.description}</p>
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                        {repo.full_name}
                    </a>
                </div>
            ))}
        </>
    )
}