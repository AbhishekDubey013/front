import { useSelector } from 'react-redux';
import { useState } from 'react';
const axios = require('axios');
const moduleTestName = localStorage.getItem('moduleTestName');
const moduleName = localStorage.getItem('moduleName');
const Buy = () => {
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [orderId, setorderId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationInProgress, setVerificationInProgress] = useState(false);

  const sendOtp = async () => {
    try {
      const response = await fetch('https://pd-backend-ia41.onrender.com/api/auth/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ phoneNumber })
      });
      const result = await response.json();
      if (result.success) {
        setOtpSent(true);
        setorderId(result.orderId)
        console.log(orderId)
        alert('OTP sent successfully');
      } else {
        alert('Failed to send OTP: ' + result.message);
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      alert('Error sending OTP');
    }
  };

  const verifyOtp = async () => {
    try {
      console.log(orderId)
      const response = await fetch('https://pd-backend-ia41.onrender.com/api/auth/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ phoneNumber, otp, orderId })
      });
      const result = await response.json();
      if (result.success) {
        alert('OTP verified successfully');
        return true;
      } else {
        alert('OTP verification failed: ' + result.message);
        return false;
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      alert('Error verifying OTP');
      return false;
    }
  };

  const buyChai = async (event) => {
    event.preventDefault();

    if (!otpSent) {
      await sendOtp();
      return;
    }

    setVerificationInProgress(true);
    const otpVerified = await verifyOtp();
    setVerificationInProgress(false);

  };


  return (
    <>
      <div className="container-md" style={{ width: "50%", marginTop: "25px" }}>
        <form onSubmit={buyChai}>
        <div>
    </div>
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter Your Phone Number"
              disabled={otpSent}
              required
            />
          </div>
          {otpSent && (
            <div className="mb-3">
              <label className="form-label">OTP</label>
              <input
                type="text"
                className="form-control"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter the OTP"
                required
              />
            </div>
          )}
          <button
            type="click"
            onClick={buyChai}
            className="btn btn-primary"
            disabled={verificationInProgress}
          >
            {otpSent ? "Verify and Pay" : "Send OTP"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Buy;
