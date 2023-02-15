import { MdRssFeed, MdChat, MdVideocam, MdGroup, MdEvent } from 'react-icons/md';


export default function Sidebar() {

    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <MdRssFeed className="sidebarIcon" />
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <MdChat className="sidebarIcon" />
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <MdVideocam className="sidebarIcon" />
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <MdGroup className="sidebarIcon" />
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <MdEvent className="sidebarIcon" />
                        <span className="sidebarListItemText">Events</span>
                    </li>
                </ul>
                <button className="sidebarBtn">Show More</button>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img src="/src/assets/utri.jpg" alt="friend profile image" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Gabry</span>
                    </li>
                </ul>
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img src="/src/assets/utri.jpg" alt="friend profile image" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">CocciGabry</span>
                    </li>
                </ul>
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img src="/src/assets/utri.jpg" alt="friend profile image" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">GabryCocci</span>
                    </li>
                </ul>
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img src="/src/assets/utri.jpg" alt="friend profile image" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">CocciGab</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
