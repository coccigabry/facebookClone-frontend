import Online from './Online.jsx'
import { Users } from '../data.js'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/context'
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa'


export default function RightSidebar({ user }) {
    const { user: currentUser, dispatch } = useContext(AuthContext)


    const HomepageSidebar = () => {
        const renderUsers = Users.map(user => <Online key={user.id} user={user} />)

        return (
            <>
                <div className="birthdayContainer">
                    <img src="/src/assets/bday.png" alt="birthday cake" className="birthdayImg" />
                    <span className="birthdayText">
                        It's <b>George Bluth</b> and <b>3 other friends</b> B-Day today!
                    </span>
                </div>
                <a href="https://coccigabry.github.io/cocciweblab/" target='_blank'>
                    <img src="/src/assets/ad.png" alt="ad image" className="rightSidebarAd" />
                </a>
                <h4 className="rightSidebarHomepageTitle">Online Friends</h4>
                <ul className="rightSidebarList">
                    {renderUsers}
                </ul>
            </>
        )
    }


    const ProfileSidebar = () => {
        const { city, job, relationship } = user
        const [friends, setFriends] = useState([])
        const [followed, setFollowed] = useState(currentUser.other.following.includes(user?._id))


        useEffect(() => {
            const getFriends = async () => {
                try {
                    const res = await axios.get(`/api/users/friends/${user._id}`)
                    setFriends(res.data.infos)
                } catch (err) {
                    console.error(err)
                }
            }
            getFriends()
        }, [user._id])

        const handleFollow = async () => {
            try {
                if (followed) {
                    console.log(user._id)
                    await axios.put(`/api/users/${user._id}/unfollow`, { userId: currentUser.other._id })
                    dispatch({ type: "UNFOLLOW", payload: user._id })
                } else {
                    await axios.put(`/api/users/${user._id}/follow`, { userId: currentUser.other._id })
                    dispatch({ type: "FOLLOW", payload: user._id })
                }
            } catch (err) {
                console.error(err)
            }
            setFollowed(!followed)
        }


        const renderFriends = friends.map(friend => {
            return (
                <Link to={`/profile/${friend._id}`} key={friend._id}>
                    <div className="rightSidebarFollowing" >
                        <img src={friend.profilePicture || '/src/assets/no-user.png'} alt="user following picture" className="rightSidebarFollowingImg" />
                        <span className="rightSidebarFollowingName">{friend.username}</span>
                    </div>
                </Link>
            )
        })


        return (
            <>
                {
                    user._id !== currentUser.other._id &&
                    <button className="rightSidebarFollowBtn" onClick={handleFollow} >
                        {followed ? 'Unfollow' : 'Follow'}
                        {followed ? <FaMinusCircle style={{ marginLeft: '5px' }} /> : <FaPlusCircle style={{ marginLeft: '5px' }} />}
                    </button>
                }
                <h4 className='rightSidebarProfileTitle'>User Information</h4>
                <div className="rightSidebarInfo">
                    <div className="rightSidebarInfoItem">
                        <span className="rightSidebarInfoKey">City:</span>
                        <span className="rightSidebarInfoValue">{city}</span>
                    </div>
                    <div className="rightSidebarInfoItem">
                        <span className="rightSidebarInfoKey">Job:</span>
                        <span className="rightSidebarInfoValue">{job}</span>
                    </div>
                    <div className="rightSidebarInfoItem">
                        <span className="rightSidebarInfoKey">Status:</span>
                        <span className="rightSidebarInfoValue">{relationship === 1 ? 'Single' : relationship === 2 ? 'On a relationship' : 'Married'}</span>
                    </div>
                </div>
                <h4 className='rightSidebarProfileTitle'>User Friends</h4>
                <div className="rightSidebarFollowings">
                    {renderFriends}
                </div>
            </>
        )
    }


    return (
        <div className="rightSidebar">
            <div className="rightSidebarWrapper">
                {user ? <ProfileSidebar /> : <HomepageSidebar />}
            </div>
        </div>
    )
}
