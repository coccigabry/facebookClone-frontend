import { BsSearch, BsPersonFill, BsChatDots } from 'react-icons/bs'
import { MdNotifications } from 'react-icons/md'


export default function Header() {

    return (
        <div className='headerContainer'>
            <div className="headerLeft">
                <span className="logo">Coccibook</span>
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
                        <BsChatDots className='iconItem' />
                        <span className="headerIconBadge">1</span>
                    </div>
                    <div className="headerIconItem">
                        <MdNotifications className='iconItem' />
                        <span className="headerIconBadge">1</span>
                    </div>
                </div>
                <img src="/src/assets/utri.jpg" alt="profile img" className='headerImg' />
            </div>
        </div>
    )
}
