import { MdMoreVert } from 'react-icons/md'


export default function Post() {

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="/src/assets/utri.jpg" alt="profile image" className="postProfileImg" />
                        <span className="postUsername">Cocci</span>
                        <span className="postDate">5 minutes ago</span>
                    </div>
                    <div className="postTopRight">
                        <MdMoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Hello World! It's my first post!</span>
                    <img src="/src/assets/utri.jpg" alt="post image" className='postImage' />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/src/assets/like.png" alt="like post" className='likeIcon' />
                        <img src="/src/assets/heart.png" alt="love post" className='likeIcon' />
                        <span className="postLikeCounter">100k people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">327 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
