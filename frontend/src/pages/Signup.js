import { useState } from "react";
import "../assets/styles/login.css";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import PasswordStrengthBar from "react-password-strength-bar";
import axios from "axios";
// FİX THE CONTROLS OF SİGN UP
// ADD JWT CONTROL AND SALTİNG
// API USAGE

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }
    
    axios.post('http://localhost:5000/users/',{
      username:username,
      email:email,
      password:password
    }).then(function (response){
      console.log(response.data);
    })
    .catch(function(error){
      if (error.response) {
        console.log('Hata Mesajı:', error.response.data); // Backend'den dönen hata mesajı
        console.log('Hata Kodu:', error.response.status); // HTTP durumu
      } else {
        console.log('Axios Hatası:', error.message);
      }
    });
    
    
  };
  const handleSignupSuccess = (response) => {
    console.log("Signup Successful! Current User:", response);
    // Backend'e gönderip token alınabilir, session oluşturulabilir
  };

  const handleSignupFailure = (error) => {
    console.log("Signup Failed:", error);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };

  return (
    <div className="login-container">
      <h2>Create Account</h2>
      <p>Become new user</p>
      <form>
        <div>
          <label htmlFor="username"> Username </label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div>
          <label htmlFor="email"> Email </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <label htmlFor="password">Password </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <PasswordStrengthBar password={password} minLength={8} onChangeScore={(score,feedback) =>{
            console.log(score, feedback);
          }} />
        </div>
        <div>
          <label htmlFor="password-confirm">Confirm Password </label>
          <input
            type="password"
            name="password-confirm"
            id="password-confirm"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <button type="button" onClick={handleSignup}>
          Signup
        </button>
      </form>
      <p>
        Have an account? <a href="/login">Login now</a>
      </p>

      <hr />

      <a href="http://localhost:5000/api/auth/google">
        Google ile Giriş Yap (Bu çalışıyor.)
      </a>
      <GoogleOAuthProvider clientId="">
        <div>
          <GoogleLogin
            onSuccess={handleSignupSuccess}
            onError={handleSignupFailure}
            useOneTap
          />
        </div>
        bu çalışmıyor.
      </GoogleOAuthProvider>
    </div>
  );
};

export default Signup;
