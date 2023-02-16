import Friends from './Friends.jsx';
import { MdRssFeed, MdChat, MdVideocam, MdGroup, MdEvent } from 'react-icons/md';
import { Users } from '../data.js'


export default function LeftSidebar() {

    const renderUsers = Users.map(user => <Friends key={user.id} user={user} />)

    return (
        <div className="leftSidebar">
            <div className="leftSidebarWrapper">
                <ul className="leftSidebarList">
                    <li className="leftSidebarListItem">
                        <MdRssFeed className="leftSidebarIcon" />
                        <span className="leftSidebarListItemText">Feed</span>
                    </li>
                    <li className="leftSidebarListItem">
                        <MdChat className="leftSidebarIcon" />
                        <span className="leftSidebarListItemText">Chats</span>
                    </li>
                    <li className="leftSidebarListItem">
                        <MdVideocam className="leftSidebarIcon" />
                        <span className="leftSidebarListItemText">Videos</span>
                    </li>
                    <li className="leftSidebarListItem">
                        <MdGroup className="leftSidebarIcon" />
                        <span className="leftSidebarListItemText">Groups</span>
                    </li>
                    <li className="leftSidebarListItem">
                        <MdEvent className="leftSidebarIcon" />
                        <span className="leftSidebarListItemText">Events</span>
                    </li>
                </ul>
                <button className="leftSidebarBtn">Show More</button>
                <hr className="leftSidebarHr" />
                <ul className="leftSidebarFriendList">
                    {renderUsers}
                </ul>
            </div>
        </div>
    )
}
