

export default function Login() {

  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Coccibook</h3>
                <span className="loginDesc">Connect with people all around the world on Coccibook</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Your Email" type="email" className="loginInput" />
                    <input placeholder="Your Password" type="password" className="loginInput" />
                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegisterButton">Create an account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
