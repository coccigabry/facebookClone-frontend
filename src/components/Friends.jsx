

export default function Friends({ user }) {

    const { avatar, username } = user

    return (
        <li className="friendsFriend">
            <img src={avatar} alt="friend profile image" className="friendsFriendImg" />
            <span className="friendsFriendName">{username}</span>
        </li>
    )
}
