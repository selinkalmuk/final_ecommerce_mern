import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/login.css";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();
    const handleLogin = async(event)=>{
      try {
        event.preventDefault();

        setEmailError('');
        setPasswordError('');

        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
          setEmailError('Please enter a valid email')
          return
        }
      
        if ('' === password) {
          setPasswordError('Please enter a password')
          return
        }

        
        // Check API FROM HERE.
        const response = await axios.post('http://localhost:5000/users/login',{
          email: email,
          password:password
        });

        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        
        console.log( response.data );
        alert("User logged in successfully");
        setEmail("");
        setPassword("");
        navigate('/profile', { replace: true });
       
      } catch (error) {
        console.error(error);
        setPasswordError(error.response.data.message);
      }
     
      
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
            <form action="">
            <div className="login-form">
            <div>
                <label htmlFor="email" > Email </label>
                <input type="email" name="email" id="email" 
                  onChange={(e)=> setEmail(e.target.value)}d
                  value={email}
                />
                <label htmlFor="emailError" className="error">{emailError}</label>
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" 
                  onChange={(e)=> setPassword(e.target.value)}
                  value={password}
                />
                <label htmlFor="passwordError" className="error">{passwordError}</label>
            </div>
           
            <button type="button" onClick={handleLogin}>Login</button>
            
            <p>Don't have an account? <a href="/signup">Signup </a></p>
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
    </div></form>
        </div>
    );
}

export default Login;