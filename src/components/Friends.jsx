import { Link } from "react-router-dom"


export default function Friends({ user }) {

    const { profilePicture, username, _id } = user

    return (
        <Link to={`/profile/${_id}`}>
            <li className="friendsFriend">
                <img src={profilePicture} alt="friend profile image" className="friendsFriendImg" />
                <span className="friendsFriendName">{username}</span>
            </li>
        </Link>
    )
}
