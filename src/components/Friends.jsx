export default function Friends() {

    return (
        <div className="friends">
            <div className="friendsWrapper">
                <div className="birthdayContainer">
                    <img src="/src/assets/bday.png" alt="birthday cake" className="birthdayImg" />
                    <span className="birthdayText">
                        It's <b>GabryCocci</b> and <b>3 other friends</b> B-Day today!
                    </span>
                </div>
                <a href="https://coccigabry.github.io/cocciweblab/" target='_blank'>
                    <img src="/src/assets/ad.png" alt="ad image" className="friendsAd" />
                </a>
                <h4 className="friendsTitle">Online Friends</h4>
                <ul className="friendsList">
                    <li className="friendsFriendItem">
                        <div className="friendsProfileImgContainer">
                            <img src="/src/assets/utri.jpg" alt="friend profile image" className="friendsProfileImg" />
                            <span className="friendsOnline"></span>
                        </div>
                        <span className="friendsUsername">Gabry</span>
                    </li>
                    <li className="friendsFriendItem">
                        <div className="friendsProfileImgContainer">
                            <img src="/src/assets/utri.jpg" alt="friend profile image" className="friendsProfileImg" />
                            <span className="friendsOnline"></span>
                        </div>
                        <span className="friendsUsername">CocciGabry</span>
                    </li>
                    <li className="friendsFriendItem">
                        <div className="friendsProfileImgContainer">
                            <img src="/src/assets/utri.jpg" alt="friend profile image" className="friendsProfileImg" />
                            <span className="friendsOnline"></span>
                        </div>
                        <span className="friendsUsername">GabryCocci</span>
                    </li>
                    <li className="friendsFriendItem">
                        <div className="friendsProfileImgContainer">
                            <img src="/src/assets/utri.jpg" alt="friend profile image" className="friendsProfileImg" />
                            <span className="friendsOnline"></span>
                        </div>
                        <span className="friendsUsername">CocciGab</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
