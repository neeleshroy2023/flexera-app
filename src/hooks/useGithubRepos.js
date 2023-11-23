import { useEffect, useState } from "react"

const useGithubRepos = () => {

    const perPage = 10;
    const [currentPage, setCurrentPage] = useState(1)
    const [data, setData] = useState([])
    const [total, setTotal] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const URL = `https://api.github.com/search/repositories?sort=stars&q=javascript&per_page=${perPage}&page=${currentPage}`

    useEffect(() => {
        setLoading(true)
        async function fetchTotalRepos() {
            fetch(URL)
                .then(res => res.json())
                .then(repos => {
                    if (repos.error) {
                        setError(repos.error)
                    }
                    setTotal(repos.total_count)
                    setData(repos.items)
                    setLoading(false);
                })
        }
        fetchTotalRepos()
    }, [currentPage])

    return { data, error, loading, total, setCurrentPage }
}

export default useGithubRepos