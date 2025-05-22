import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"

function Pagination() {
    
    const [searchParams, setSearchParams] = useSearchParams()
    const [page, setPage] = useState(searchParams.get("p") || "0")
    const [limit, setLimit] = useState(searchParams.get("limit") || "10")

    useEffect(() => {
        
            const newParams = new URLSearchParams(searchParams)
            newParams.set("p", page)
            newParams.set("limit", limit)
            setSearchParams(newParams)
        
    }, [page, limit])

    return (
        <form >
            <label htmlFor="p">Pagination:</label>
            <input
            type="number"
            name="p"
            id="p"
            value={page}
            onChange={e => setPage(e.target.value)} 
            />

            <label htmlFor="limit"></label>
            <input
            type="number"
            name="limit"
            id="limit"
            value={limit}
            onChange={e => setLimit(e.target.value)}
            />

        </form>
    )
}

export default Pagination