import logo from "../Assets/jaunt_logo.png"

function Login({username, password, onChangeUsername, onChangePassword}) {
    return (
        <main className="login-container">
            <img id="logo" src={logo} alt="jaunt logo"/>
            <div className="login-window-border">
                <div className="login-window">
                    <h1>Sign in</h1>
                    <form className="login-form">
                        <input className="login-username" type="text" placeholder="Username or Email" value={username} onChange={onChangeUsername}/>
                        <input className="login-password" type="password" placeholder="Password" value={password} onChange={onChangePassword}/>
                        <p>Forgot password?</p>
                        <button id="login-button">Log In</button>
                        <hr></hr>
                        <span className="login-text">New to Jaunt? Click below to create an account!</span>
                        <button id="login-create-account-button">Create Account</button>
                    </form>
                </div>
            </div>
        </main>
        
    );
};

export default Login;