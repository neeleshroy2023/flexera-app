import React, { useEffect, useState } from "react";
import useGithubRepos from "../hooks/useGithubRepos";
import ReactPaginate from "react-paginate";
import { useLocalStorage } from "@uidotdev/usehooks";

import Repo from "./Repo";

const List = () => {
  const limit = 20;
  const { data, loading, total, setCurrentPage } = useGithubRepos();
  const [savedPageCount, setSavedPageCount] = useLocalStorage(
    "savedPageCount",
    0
  );
  const [marked, setMarked] = useLocalStorage("marked", []);

  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    if (data) {
      const pageCounts = Math.ceil(total / limit);
      setPageCount(pageCounts);
      setSavedPageCount(pageCounts);
    } else {
      setPageCount(savedPageCount);
    }
  }, [limit, total, data]);

  return (
    <div className="container main">
      {loading && <p>Loading...</p>}
      {data ? (
        data?.map((repo) => (
          <Repo
            key={repo.id}
            imageUrl={repo.owner.avatar_url}
            name={repo.name}
            orgName={repo.owner.login}
            repoName={repo.full_name}
            description={repo.description}
            id={repo.id}
            marked={marked.includes(repo.id)}
            setMarked={setMarked}
          />
        ))
      ) : (
        <p>{data?.message || "First 1000 entries are allowed"}</p>
      )}
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={(current) => setCurrentPage(current.selected + 1)}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default List;
