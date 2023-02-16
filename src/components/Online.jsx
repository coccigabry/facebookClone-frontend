

export default function Online({ user }) {

    const { avatar, username, online } = user

    if (online) {
        return (
            <li className="onlineFriendItem">
                <div className="onlineProfileImgContainer">
                    <img src={avatar} alt="friend profile image" className="onlineProfileImg" />
                    <span className="onlineOnline"></span>
                </div>
                <span className="onlineUsername">{username}</span>
            </li>
        )
    }
}
