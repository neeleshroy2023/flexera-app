const Repo = ({ imageUrl, name, orgName, repoName, description }) => (
    <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={imageUrl} alt={name} />
        <div className="card-body repo-card-body">
            <h5 className="card-title">Org Name: {orgName}</h5>
            <div>
                <p className="card-text">Repo name: {repoName}</p>
                <p className="card-text">Description: {description}</p>
            </div>
            <p>Marked</p>
        </div>
    </div>
)

export default Repo;