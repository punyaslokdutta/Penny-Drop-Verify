import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import axios from 'axios';

const Screen2 = () => {
  const location = useLocation();
  const history = useHistory();
  const { accountNumber, ifscCode } = location.state || {};
  const [verificationStatus, setVerificationStatus] = useState(null);

  const handleConfirm = async () => {
    try {
      // Perform actions after verification (e.g., show animation)

      // Hit your Node.js server for account verification
      const response = await axios.get(`http://localhost:4000/bank/${ifscCode}/accounts/${accountNumber}/verify?name=JOHN%20DOE&mobile=9999999999`);

      // Update verification status
      setVerificationStatus(response.data);

      // Redirect to Screen1 after verification
      history.push('/screen1');
    } catch (error) {
      console.error('Error during account verification', error);
    }
  };

  useEffect(() => {
    // You can perform additional actions when the component mounts
    // ...

    // Cleanup logic or additional actions when the component unmounts
    return () => {
      // ...
    };
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div>
      <h1>Screen 2</h1>
      <p>Account Number: {accountNumber}</p>
      <p>IFSC Code: {ifscCode}</p>
      {verificationStatus && (
        <>
          <p>Verification Status: {verificationStatus.message}</p>
          <p>Amount Deposited: {verificationStatus.amount_deposited}</p>
        </>
      )}
      <button onClick={handleConfirm}>Confirm</button>
    </div>
  );
};

export default Screen2;
