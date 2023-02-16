import axios from 'axios'
import { format } from 'timeago.js'
import { useEffect, useState } from 'react'
import { MdMoreVert } from 'react-icons/md'


export default function Post({ post }) {
    const [user, setUser] = useState({})
    const [likeIt, setLikeIt] = useState(post.likes.length)
    const [isLiked, setIsLiked] = useState(false)

    const { userId, desc, img, createdAt } = post

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/api/users/${userId}`)
            setUser(res.data.infos)
        }
        fetchUser()
    }, [userId])

    const likeHandler = () => {
        setLikeIt(
            isLiked ? likeIt - 1 : likeIt + 1
        )
        setIsLiked(!isLiked)
    }


    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img
                            src={user.profilePicture || '/src/assets/no-user.png'}
                            alt="profile image"
                            className="postProfileImg"
                        />
                        <span className="postUsername">{user.username}</span>
                        <span className="postDate">{format(createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MdMoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{desc}</span>
                    <img src={img} alt="" className='postImage' />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img
                            src="/src/assets/like.png"
                            alt="like post"
                            className='likeIcon'
                            onClick={likeHandler}
                        />
                        <img
                            src="/src/assets/heart.png"
                            alt="love post"
                            className='likeIcon'
                            onClick={likeHandler}
                        />
                        <span className="postLikeCounter">{likeIt} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">0 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
