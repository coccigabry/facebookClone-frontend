import { useContext, useRef, useState } from 'react'
import { AuthContext } from '../context/context'
import { MdPermMedia, MdLabel, MdLocationOn, MdEmojiEmotions } from 'react-icons/md'
import axios from 'axios'


export default function Share() {
    const { user } = useContext(AuthContext)
    const desc = useRef()
    const [file, setFile] = useState(null)


    const handleSubmit = async (e) => {
        e.preventDefault()
        const newPost = {
            userId: user.other._id,
            desc: desc.current.value,
        }
        if (file) {
            const data = new FormData()
            const fileName = Date.now() + file.name
            data.append('file', file)
            data.append('name', fileName)
            newPost.img = fileName

            try {
                await axios.post(`/api/upload/`, data)
                window.location.reload()
            } catch (err) {
                console.error(err)
            }
        }

        try {
            await axios.post(`/api/posts/`, newPost)
        } catch (err) {
            console.error(err)
        }
    }


    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src={user.other.profilePicture || '/src/assets/no-user.png'} alt="profile image" className="shareProfileImg" />
                    <input ref={desc} className="shareInput" placeholder={`What's in your mind ${user.other.username}?`} />
                </div>
                <hr className="shareHr" />
                <form className="shareBottom" onSubmit={handleSubmit}>
                    <div className="shareOptions">
                        <label htmlFor='file' className="shareOption">
                            <MdPermMedia style={{ color: 'orange' }} className='shareIcon' />
                            <span className="shareOptionText">Add Photo/Video</span>
                            <input
                                style={{ display: 'none' }}
                                type="file"
                                id='file'
                                accept='.png,.jpeg,.jpg'
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                        </label>
                        <div className="shareOption">
                            <MdLabel style={{ color: 'blue' }} className='shareIcon' />
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
                    <button className='shareButton' type='submit'>Share</button>
                </form>
            </div>
        </div>
    )
}
