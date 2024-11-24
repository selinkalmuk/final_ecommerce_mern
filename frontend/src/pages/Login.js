import "../assets/styles/login.css";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
const Login = () => {
    const handleSubmit = (e)=>{

    };
    const handleLoginSuccess = (response) => {
        console.log('Login Successful! Current User:', response);
        // Backend'e gönderip token alınabilir, session oluşturulabilir
      };
    
      const handleLoginFailure = (error) => {
        console.log('Login Failed:', error);
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
            <a href="http://localhost:5000/api/auth/google">
            Google ile Giriş Yap (Bu çalışıyor.)
            </a>
            <GoogleOAuthProvider clientId="">
      <div>

        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginFailure}
          useOneTap
        />
      </div>
      bu çalışmıyor.
    </GoogleOAuthProvider>
        </div>
    );
}

export default Login;