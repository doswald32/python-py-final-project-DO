import logo from "../Assets/jaunt_logo.png"

function CreateAccount({newUserData, onChangeFirst, onChangeLast, onChangeNewUsername, onChangeNewPassword, onChangeEmail, onChangePhone}) {
    return (
        <main className="login-container">
            <div>
                <img id="logo" src={logo} alt="jaunt logo"/>
            </div>
            <div className="login-window-border">
                <div className="login-window">
                    <h1>Create an Account</h1>
                    <form className="create-account-form">
                        <input className="create-account-first" type="text" placeholder="First Name" value={newUserData.firstName} onChange={onChangeFirst}/>
                        <input className="create-account-last" type="text" placeholder="Last Name" value={newUserData.lastName} onChange={onChangeLast}/>
                        <input className="create-account-username" type="text" placeholder="Username" value={newUserData.newUsername} onChange={onChangeNewUsername}/>
                        <input className="create-account-password" type="password" placeholder="Password" value={newUserData.newPassword} onChange={onChangeNewPassword}/>
                        <input className="create-account-email" type="text" placeholder="Email" value={newUserData.email} onChange={onChangeEmail}/>
                        <input className="create-account-phone" type="tel" placeholder="Phone Number" value={newUserData.phone} onChange={onChangePhone}/>
                        <button id="create-account-button">Create Account</button>
                        <hr></hr>
                        <span className="login-text">Already have an account? Sign In!</span>
                    </form>
                </div>
            </div>
        </main>
        
    );
};

export default CreateAccount;