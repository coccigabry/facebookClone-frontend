import { Link } from 'react-router-dom'
import { BsSearch, BsPersonFill, BsChatDotsFill, BsBellFill } from 'react-icons/bs'


export default function Header() {

    return (
        <div className='headerContainer'>
            <div className="headerLeft">
                <Link to='/'>
                    <span className="logo">Coccibook</span>
                </Link>
            </div>
            <div className="headerCenter">
                <div className="searchbar">
                    <BsSearch className='searchIcon' />
                    <input type='text' placeholder='Search friends, posts, videos' className="searchInput" />
                </div>
            </div>
            <div className="headerRight">
                <div className="headerLinks">
                    <span className="headerLink">Homepage</span>
                    <span className="headerLink">Timeline</span>
                </div>
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
                <img src="/src/assets/utri.jpg" alt="profile img" className='headerImg' />
            </div>
        </div>
    )
}
