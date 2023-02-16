import Online from './Online.jsx'
import { Users } from '../data.js'


export default function RightSidebar({ profile }) {

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
        return (
            <>
                <h4 className='rightSidebarProfileTitle'>User Information</h4>
                <div className="rightSidebarInfo">
                    <div className="rightSidebarInfoItem">
                        <span className="rightSidebarInfoKey">City:</span>
                        <span className="rightSidebarInfoValue">Genoa</span>
                    </div>
                    <div className="rightSidebarInfoItem">
                        <span className="rightSidebarInfoKey">Job:</span>
                        <span className="rightSidebarInfoValue">Web Developer</span>
                    </div>
                    <div className="rightSidebarInfoItem">
                        <span className="rightSidebarInfoKey">Status:</span>
                        <span className="rightSidebarInfoValue">On a relationship</span>
                    </div>
                </div>
                <h4 className='rightSidebarProfileTitle'>User Friends</h4>
                <div className="rightSidebarFollowings">
                    <div className="rightSidebarFollowing">
                        <img src="/src/assets/utri.jpg" alt="user following picture" className="rightSidebarFollowingImg" />
                        <span className="rightSidebarFollowingName">Jonny</span>
                    </div>
                    <div className="rightSidebarFollowing">
                        <img src="/src/assets/utri.jpg" alt="user following picture" className="rightSidebarFollowingImg" />
                        <span className="rightSidebarFollowingName">Jimmy</span>
                    </div>
                    <div className="rightSidebarFollowing">
                        <img src="/src/assets/utri.jpg" alt="user following picture" className="rightSidebarFollowingImg" />
                        <span className="rightSidebarFollowingName">JJ</span>
                    </div>
                    <div className="rightSidebarFollowing">
                        <img src="/src/assets/utri.jpg" alt="user following picture" className="rightSidebarFollowingImg" />
                        <span className="rightSidebarFollowingName">Jenny</span>
                    </div>
                    <div className="rightSidebarFollowing">
                        <img src="/src/assets/utri.jpg" alt="user following picture" className="rightSidebarFollowingImg" />
                        <span className="rightSidebarFollowingName">Jenny</span>
                    </div>
                    <div className="rightSidebarFollowing">
                        <img src="/src/assets/utri.jpg" alt="user following picture" className="rightSidebarFollowingImg" />
                        <span className="rightSidebarFollowingName">Jenny</span>
                    </div>
                    <div className="rightSidebarFollowing">
                        <img src="/src/assets/utri.jpg" alt="user following picture" className="rightSidebarFollowingImg" />
                        <span className="rightSidebarFollowingName">Jenny</span>
                    </div>
                    <div className="rightSidebarFollowing">
                        <img src="/src/assets/utri.jpg" alt="user following picture" className="rightSidebarFollowingImg" />
                        <span className="rightSidebarFollowingName">Jenny</span>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className="rightSidebar">
            <div className="rightSidebarWrapper">
                <ProfileSidebar />
            </div>
        </div>
    )
}
