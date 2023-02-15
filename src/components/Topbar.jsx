import { BsSearch, BsPersonFill, BsChatDots } from 'react-icons/bs'
import { MdNotifications } from 'react-icons/md'


export default function Topbar() {

    return (
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <span className="logo">Coccibook</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <BsSearch className='searchIcon' />
                    <input
                        type='text'
                        placeholder='Search friends, posts, videos'
                        className="searchInput"
                    />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <BsPersonFill className='iconItem' />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <BsChatDots className='iconItem' />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <MdNotifications className='iconItem' />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img src="/src/assets/utri.jpg" alt="profile img" className='topbarImg' />
            </div>
        </div>
    )
}
