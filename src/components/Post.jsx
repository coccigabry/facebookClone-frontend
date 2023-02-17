import axios from 'axios'
import { format } from 'timeago.js'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdMoreVert } from 'react-icons/md'
import { AuthContext } from '../context/context'


export default function Post({ post }) {
    const { user } = useContext(AuthContext)

    const [userHasWrittenPost, setUserHasWrittenPost] = useState({})
    const [likeIt, setLikeIt] = useState(post.likes.length)
    const [isLiked, setIsLiked] = useState(false)

    useEffect(() => {
        setIsLiked(post.likes.includes(user.other._id))
    }, [user.other._id, post.likes])

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/api/users/${post.userId}`)
            setUserHasWrittenPost(res.data.infos)
        }
        fetchUser()
    }, [user.other._id])

    const likeHandler = async () => {
        try {
            await axios.put(`/api/posts/${post._id}/like`, { userId: user.other._id })
        } catch (err) {
            console.error(err)
        }
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
                        <Link to={`/profile/${userHasWrittenPost._id}`}>
                            <img
                                src={userHasWrittenPost.profilePicture || '/src/assets/no-user.png'}
                                alt="profile image"
                                className="postProfileImg"
                            />
                            <span className="postUsername">{userHasWrittenPost.username}</span>
                        </Link>
                        <span className="postDate">{format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MdMoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post.desc}</span>
                    <img src={post.img} alt="" className='postImage' />
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
