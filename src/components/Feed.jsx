import Share from "./Share"
import Post from "./Post"
import { Posts } from '../data.js'


export default function Feed() {

    const renderPosts = Posts.map(post => <Post key={post.id} post={post} />)

    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                {renderPosts}
            </div>
        </div>
    )
}
