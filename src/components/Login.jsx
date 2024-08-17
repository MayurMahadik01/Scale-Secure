import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import carousel from "../assets/Scale.png";
import carousel1 from "../assets/Google.png";
import carousel2 from "../assets/Microsoft.png";

export default function Form() {
  const [email, setEmail] = useState(''); // Declare email state
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleGenerateOtp = () => {
    console.log('Generating OTP for:', email);
    navigate('/agent'); // Redirect to the Agent component
  };

  if (!isDesktop) {
    return (
      <div className="mobile-warning">
        <h2>Please use desktop version to view this</h2>
      </div>
    );
  }

  return (
    <section>
      <div className="outer-box">
        <img src={carousel} alt="Scale" className="logo" />
      </div>
      <div className='register'>
        <div className="col-1">
          <h2>Sign Up</h2>
          <form id="form" className="flex flex-col">
            <h4>Email</h4>
            <input 
              type="text" 
              placeholder="abc@example.com" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            <button type="button" onClick={handleGenerateOtp}>
              Generate OTP
            </button>
          </form>
          <div className="divider">
            <span>or</span>
          </div>
          <div className="social-login">
            <button className="social-button">
              <img src={carousel1} alt="Google" className="logo" />
            </button>
            <button className="social-button">
              <img src={carousel2} alt="Microsoft" className="logo" />
            </button>
          </div>
          <div className="color-text">
            <p>Already have an account? Sign in</p>
          </div>
        </div>
      </div>
    </section>
  );
}
