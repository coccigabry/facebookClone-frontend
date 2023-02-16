import { useState } from 'react'
import { MdMoreVert } from 'react-icons/md'
import { Users } from '../data.js'


export default function Post({ post }) {
    const [likeIt, setLikeIt] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)

    const { title, photo, date, userId, comments } = post

    const likeHandler = () => {
        setLikeIt(
            isLiked ? likeIt - 1 : likeIt + 1
        )
        setIsLiked(!isLiked)
    }

    const renderUser = Users.filter(user => user.id === userId)

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={renderUser[0].avatar} alt="profile image" className="postProfileImg" />
                        <span className="postUsername">{renderUser[0].username}</span>
                        <span className="postDate">{date}</span>
                    </div>
                    <div className="postTopRight">
                        <MdMoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{title}</span>
                    <img src={photo} alt="post image" className='postImage' />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/src/assets/like.png" alt="like post" className='likeIcon' onClick={likeHandler} />
                        <img src="/src/assets/heart.png" alt="love post" className='likeIcon' onClick={likeHandler} />
                        <span className="postLikeCounter">{likeIt} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{comments} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
