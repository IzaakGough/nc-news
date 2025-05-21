import { useEffect, useState } from "react"
import { useNavigate, createSearchParams } from "react-router-dom"
import { getTopics } from "../utils/api"

function Topics() {

    const [topics, setTopics] = useState([])
    const [selectedTopic, setSelectedTopic] = useState("")
    const navigate = useNavigate()

    useEffect(()=>{

        getTopics()
        .then(topics => {
            setTopics(topics)
        })
        .catch(err => console.log(err))

    }, [])

    function handleChange(event) {
        setSelectedTopic(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (selectedTopic) {
            navigate(
                {
                    pathname: "/articles",
                    search: createSearchParams({
                        topic: selectedTopic
                    }).toString()
                }
            )
        }      
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
        <label htmlFor="topics">Choose a topic: </label>
        <select 
        name="topic"
        id="topic"
        value={selectedTopic}
        onChange={handleChange}
        >
        {topics.map(topic => {
            return <option 
            value={topic.slug}
            >{topic.slug}</option>
        })}
        </select>
        <input type="submit" disabled={!selectedTopic} />Filter
        </form>
        </>
    )
}


export default Topics