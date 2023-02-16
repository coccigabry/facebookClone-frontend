import { MdPermMedia, MdLabel, MdLocationOn, MdEmojiEmotions } from 'react-icons/md'


export default function Share() {

    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="/src/assets/utri.jpg" alt="profile image" className="shareProfileImg" />
                    <input className="shareInput" placeholder="What's in your mind Cocci?" />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <MdPermMedia style={{ color: 'black' }} className='shareIcon' />
                            <span className="shareOptionText">Add Photo/Video</span>
                        </div>
                        <div className="shareOption">
                            <MdLabel style={{ color: 'black' }} className='shareIcon' />
                            <span className="shareOptionText">Tag a friend</span>
                        </div>
                        <div className="shareOption">
                            <MdLocationOn style={{ color: 'red' }} className='shareIcon' />
                            <span className="shareOptionText">Add location</span>
                        </div>
                        <div className="shareOption">
                            <MdEmojiEmotions style={{ color: 'goldenrod' }} className='shareIcon' />
                            <span className="shareOptionText">Feeling</span>
                        </div>
                    </div>
                    <button className='shareButton'>Share</button>
                </div>
            </div>
        </div>
    )
}
