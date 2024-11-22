import "../assets/styles/login.css";

const Login = () => {
    const handleSubmit = (e)=>{

    };
    return(
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email"> Email: </label>
                <input type="email" name="email" id="email" />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" />
            </div>
            <p className="error">Error</p>
            <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;