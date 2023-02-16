import LeftSidebar from "../components/LeftSidebar"
import Feed from "../components/Feed"
import RightSidebar from "../components/RightSidebar"


export default function Profile() {

    return (
        <div className="profile">
            <LeftSidebar />
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img src="/src/assets/utri.jpg" alt="profile cover image" className="profileCoverImg" />
                        <img src="/src/assets/utri.jpg" alt="profile user image" className="profileUserImg" />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">CocciGabry</h4>
                        <span className="profileInfoDesc">Sweep the sheed!</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                    <Feed />
                    <RightSidebar profile />
                </div>
            </div>
        </div>
    )
}
