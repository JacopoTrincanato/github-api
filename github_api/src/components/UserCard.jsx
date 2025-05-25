export default function UserCard({ data }) {

    return (
        <>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                {data.map((user) => (
                    <div key={user.id} className="col">
                        <div className="card h-100 shadow-sm text-center">
                            <img src={user.avatar_url} alt={user.login} className="card-img-top img-thumbnail mx-auto mt-3" style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%' }} />
                            <div className="card-body">
                                <h5 className="card-title">{user.login}</h5>
                                <p className="card-text text-muted">Profile: {user.type}</p>
                            </div>
                            <div className="card-footer border-top-2 bg-light text-center w-100">
                                <a href={user.html_url} className="card-text text-muted text-decoration-none">
                                    Link Profile
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}