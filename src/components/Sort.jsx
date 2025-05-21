import { useEffect, useState } from "react"
import { useNavigate, createSearchParams, useSearchParams } from "react-router-dom"

function Sort() {

    const [searchParams, setSearchParams] = useSearchParams()
    const [selectedSort, setSelectedSort] = useState(searchParams.get("sort") || "created_at")
    const [selectedOrder, setSelectedOrder] = useState(searchParams.get("order") || "desc")


    useEffect(() => {
        if (selectedSort && selectedOrder) {
            const newParams = new URLSearchParams(searchParams)
            newParams.set("sort_by", selectedSort)
            newParams.set("order", selectedOrder)
            setSearchParams(newParams)
        } else {
            const newParams = new URLSearchParams(searchParams)
            newParams.delete("sort_by")
            newParams.delete("order")
            setSearchParams(newParams)
        }
    }, [selectedSort, selectedOrder])


    return (
        <>
        <label htmlFor="sort_by">Sort by: </label>
        <select 
        name="sort_by"
        id="sort_by"
        value={selectedSort}
        onChange={e => setSelectedSort(e.target.value)}
        >
        <option value="created_at">date</option>
        <option value="comment_count">comment count</option>
        <option value="votes">votes</option>
        </select>

        <label htmlFor="order"></label>
        <select
        name="order"
        id="order"
        value={selectedOrder}
        onChange={e => setSelectedOrder(e.target.value)}
        >
        <option value="asc">ascending</option>
        <option value="desc">descending</option>
        </select>
        </>
    )
}

export default Sort 