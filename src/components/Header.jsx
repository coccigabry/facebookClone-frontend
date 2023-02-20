import { Link, useNavigate } from 'react-router-dom'
import { BsSearch, BsPersonFill, BsChatDotsFill, BsBellFill } from 'react-icons/bs'
import { useContext, useRef } from 'react'
import { AuthContext } from '../context/context'
import axios from 'axios'


export default function Header() {
    const { user } = useContext(AuthContext)
    const search = useRef()
    const navigate = useNavigate()

    const handleSearch = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.get(`/api/users/${search.current.value}`)
            navigate(`/profile/${res.data.infos._id}`)
        } catch (err) {
            console.error(err)
        }
    }


    return (
        <div className='headerContainer'>
            <div className="headerLeft">
                <Link to='/'>
                    <span className="logo">Coccibook</span>
                </Link>
            </div>
            <div className="headerCenter">
                <form className="searchbar" onSubmit={handleSearch}>
                    <BsSearch className='searchIcon' />
                    <input
                        type='text'
                        ref={search}
                        placeholder='Search friends, posts, videos'
                        className="searchInput"
                    />
                </form>
            </div>
            <div className="headerRight">
                <div className="headerIcons">
                    <div className="headerIconItem">
                        <BsPersonFill className='iconItem' />
                        <span className="headerIconBadge">1</span>
                    </div>
                    <div className="headerIconItem">
                        <BsChatDotsFill className='iconItem' />
                        <span className="headerIconBadge">1</span>
                    </div>
                    <div className="headerIconItem">
                        <BsBellFill className='iconItem' />
                        <span className="headerIconBadge">1</span>
                    </div>
                </div>
                Welcome back, {user.other.username} !
                <Link to={`/profile/${user.other._id}`}>
                    <img src={user.other.profilePicture || '/src/assets/no-user.png'} alt="profile img" className='headerImg' />
                </Link>
            </div>
        </div>
    )
}
