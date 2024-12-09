

function Login() {
    return (
        <main className="login-container">
            <div className="login-window-border">
                <div className="login-window">
                    <h1>Sign in</h1>
                    <form className="login-form">
                        <input className="login-username" type="text" placeholder="Username or Email"/>
                        <input className="login-password" type="text" placeholder="Password" />
                        <p>Forgot password?</p>
                        <button className="Login Button">Log In</button>
                        <hr></hr>
                        <p>New to Jaunt? Click below to create an account!</p>
                        <button>Create Account</button>
                    </form>
                </div>
            </div>
        </main>
        
    );
};

export default Login;