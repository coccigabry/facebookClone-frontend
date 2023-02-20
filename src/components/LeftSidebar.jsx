import Friends from './Friends.jsx';
import { MdRssFeed, MdChat, MdVideocam, MdGroup, MdEvent } from 'react-icons/md';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/context.jsx';
import axios from 'axios';


export default function LeftSidebar() {
    const { user: currentUser } = useContext(AuthContext)
    const [friends, setFriends] = useState([])

    useEffect(() => {
        const getFriends = async () => {
            try {
                const res = await axios.get(`/api/users/friends/${currentUser.other._id}`)
                setFriends(res.data.infos)
            } catch (err) {
                console.error(err)
            }
        }
        getFriends()
    }, [currentUser.other._id])

    const renderUsers = friends.map(friend => <Friends key={friend._id} user={friend} />)

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
