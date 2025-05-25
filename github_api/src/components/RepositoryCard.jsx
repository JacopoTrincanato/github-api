export default function RepositoryCard({ data }) {

    return (
        <>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-4">
                {data.map((repo) => (
                    <div key={repo.id} className="col">
                        <div className="card h-100 shadow-sm border-0">
                            <img src={repo.owner.avatar_url} alt="" className="card-img-top img-thumbnail mx-auto mt-3" style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%' }} />
                            <div className="card-body">
                                <h5 className="card-title">{repo.full_name}</h5>
                                <p className="card-text">{repo.description}</p>
                                <div>Forks: {repo.forks_count}</div>
                                <div>Watchers: {repo.watchers_count}</div>
                            </div>
                            <div className="card-footer border-top-2 bg-light text-center w-100">
                                <a href={repo.html_url} rel="noopener noreferrer" className="card-text text-muted text-decoration-none">
                                    Link Repo
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}