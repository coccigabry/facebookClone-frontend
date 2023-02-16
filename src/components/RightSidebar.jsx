import Online from './Online.jsx'
import { Users } from '../data.js'


export default function RightSidebar() {

    const renderUsers = Users.map(user => <Online key={user.id} user={user} />)

    return (
        <div className="rightSidebar">
            <div className="rightSidebarWrapper">
                <div className="birthdayContainer">
                    <img src="/src/assets/bday.png" alt="birthday cake" className="birthdayImg" />
                    <span className="birthdayText">
                        It's <b>GabryCocci</b> and <b>3 other friends</b> B-Day today!
                    </span>
                </div>
                <a href="https://coccigabry.github.io/cocciweblab/" target='_blank'>
                    <img src="/src/assets/ad.png" alt="ad image" className="rightSidebarAd" />
                </a>
                <h4 className="rightSidebarTitle">Online Friends</h4>
                <ul className="rightSidebarList">
                    {renderUsers}
                </ul>
            </div>
        </div>
    )
}
