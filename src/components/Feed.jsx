import Share from "./Share"
import Post from "./Post"
import { useState, useEffect, useContext } from "react"
import axios from "axios"
import { AuthContext } from "../context/context"


export default function Feed({ userId }) {
    const { user } = useContext(AuthContext)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            const res = userId
                ? await axios.get(`/api/posts/profile/${userId}`)
                : await axios.get(`/api/posts/timeline/${user.other._id}`)
            setPosts(res.data.infos)
        }
        fetchPosts()
    }, [userId, user.other._id])

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
