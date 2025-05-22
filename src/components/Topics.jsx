import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { getTopics } from "../utils/api"

function Topics() {
    const [topics, setTopics] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const topic = searchParams.get("topic") || ""
    
    useEffect(()=>{

        getTopics()
        .then(topics => {
            setTopics(topics)
        })
        .catch(err => console.log(err))

    }, [])

    function handleChange(e) {
        const newParams = new URLSearchParams(searchParams)
        newParams.set("topic", e.target.value)
        setSearchParams(newParams)
    }

    return (
        <>
        <label htmlFor="topics">Choose a topic: </label>
        <select 
        name="topic"
        id="topic"
        value={topic}
        onChange={handleChange}
        >
        {topics.map(topic => {
            return <option 
            value={topic.slug}
            >{topic.slug}</option>
        })}
        </select>
        </>
    )
}


export default Topics