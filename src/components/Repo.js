import React from 'react'

const Repo = ({
  imageUrl = "https://avatars.githubusercontent.com/u/9919?v=4",
  name = "Flexera",
  orgName = "Flexera",
  repoName = "Flexera Web",
  description = "",
  marked = "false",
  setMarked,
  id = 2,
}) => (
  <div className="card flex-row flex-wrap">
    <div className="card-header border-0">
      <img src={imageUrl} alt={name} width={40} />
    </div>
    <div className="container">
      <div className="card-block row px-2">
        <div className="col-lg-4">
          <h5 className="card-title">Org Name: {orgName}</h5>
        </div>
        <div className="col-lg-4">
          <p className="card-text">Repo name: {repoName}</p>
          <p className="card-text">Description: {description}</p>
        </div>
        <div className="form-check col-lg-4">
          <input
            className="form-check-input"
            data-testid="lp-checkbox"
            type="checkbox"
            value=""
            id="flexCheckChecked"
            checked={marked}
            onChange={(e) => {
              if (e.target.checked) {
                setMarked((prev) => [...prev, id]);
              } else {
                setMarked((prev) => prev.filter((item) => item !== id));
              }
            }}
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            Marked
          </label>
        </div>
      </div>
    </div>
  </div>
);

export default Repo;
