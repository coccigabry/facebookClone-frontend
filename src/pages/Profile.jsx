import LeftSidebar from "../components/LeftSidebar"
import Feed from "../components/Feed"
import RightSidebar from "../components/RightSidebar"
import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import Header from "../components/Header"


export default function Profile() {
    const selectedUser = useParams().id
    const [user, setUser] = useState({})

    const { coverPicture, profilePicture, username, desc } = user

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/api/users/${selectedUser}`) //user got from params
            setUser(res.data.infos)
        }
        fetchUser()
    }, [selectedUser])


    return (
        <>
            <Header />
            <div className="profile">
                <LeftSidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src={coverPicture || '/src/assets/no-cover.jpg'} alt="profile cover image" className="profileCoverImg" />
                            <img src={profilePicture || '/src/assets/no-user.png'} alt="profile user image" className="profileUserImg" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">{username}</h4>
                            <span className="profileInfoDesc">{desc}</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed userId={selectedUser} />
                        <RightSidebar user={user} />
                    </div>
                </div>
            </div>
        </>
    )
}
