import Share from "./Share"
import Post from "./Post"
import { useState, useEffect } from "react"
import axios from "axios"


export default function Feed() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get('/api/posts/timeline/63e4d15c9344e5d9e2d56407')
            setPosts(res.data.infos)
        }
        fetchPosts()
    }, [])

    const renderPosts = posts.map(post => <Post key={post._id} post={post} />)

    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                {renderPosts}
            </div>
        </div>
    )
}
