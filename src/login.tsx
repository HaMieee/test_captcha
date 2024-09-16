
import React, { useState } from 'react';
import ReCAPTCHAComponent from './captcha';

const Login: React.FC = () => {
    const [showLogin, setShowLogin] = useState<boolean>(false);

    const handleReCAPTCHAVerify = () => {
        setShowLogin(true);
    };

    return (
        <div>
            {!showLogin ? (
                <ReCAPTCHAComponent onVerify={handleReCAPTCHAVerify} />
            ) : (
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <h2>Login</h2>
                     <form
                    style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                     <label>
                    Username:
                    <input type="text" name="username" required style={{margin: '10px 15px'}}/>
                    </label>
                    <label>
                    Password:
                    <input type="password" name="password" required style={{margin: '10px 15px'}}/>
                    </label>
                     <button type="submit">Login</button>
                     </form>
                </div>
            )}
        </div>
    );
};

export default Login;
