import logo from "../Assets/jaunt_logo.png"

function CreateAccount() {
    return (
        <main className="login-container">
            <img id="logo" src={logo} alt="jaunt logo"/>
            <div className="login-window-border">
                <div className="login-window">
                    <h1>Create an Account</h1>
                    <form className="create-account-form">
                        <input className="create-account-first" type="text" placeholder="First Name"/>
                        <input className="create-account-last" type="text" placeholder="Last Name"/>
                        <input className="create-account-username" type="text" placeholder="Username"/>
                        <input className="create-account-password" type="text" placeholder="Password"/>
                        <input className="create-account-email" type="text" placeholder="Email"/>
                        <input className="create-account-phone" type="text" placeholder="Phone Number"/>
                        <button id="create-account-button">Create Account</button>
                    </form>
                </div>
            </div>
        </main>
        
    );
};

export default CreateAccount;