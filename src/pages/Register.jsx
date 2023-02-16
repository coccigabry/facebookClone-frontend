

export default function Register() {

  return (
    <div className='register'>
        <div className="registerWrapper">
            <div className="registerLeft">
                <h3 className="registerLogo">Coccibook</h3>
                <span className="registerDesc">Connect with people all around the world on Coccibook</span>
            </div>
            <div className="registerRight">
                <div className="registerBox">
                    <input placeholder="Your Name" type="text" className="registerInput" />
                    <input placeholder="Your Email" type="email" className="registerInput" />
                    <input placeholder="Your Password" type="password" className="registerInput" />
                    <input placeholder="Repeat your Password" type="password" className="registerInput" />
                    <button className="registerButton">Sign Up</button>
                </div>
            </div>
        </div>
    </div>
  )
}
