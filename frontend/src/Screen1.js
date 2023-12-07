import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Screen1 = () => {
  const history = useHistory();
  const [accountNumber, setAccountNumber] = useState('');
  const [ifscCode, setIFSCCode] = useState('');

  const handleVerification = async () => {
    try {
      // Local validation for accountNumber and ifscCode
      // ...

      // Call Razorpay API for IFSC validation
      const response = await axios.get(`http://ifsc.razorpay.com/${ifscCode}`);
      
      // Check response for validation
      if (response.data) {
        // Redirect to Screen2 if validation is successful
        history.push('/screen2', { accountNumber, ifscCode });
      } else {
        // Handle validation failure (Show error message or redirect back to Screen1)
        console.error('IFSC validation failed');
      }
    } catch (error) {
      console.error('Error during validation', error);
    }
  };

  return (
    <div>
      <h1>Screen 1</h1>
      <label>
        Account Number:
        <input type="text" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} />
      </label>
      <br />
      <label>
        IFSC Code:
        <input type="text" value={ifscCode} onChange={(e) => setIFSCCode(e.target.value)} />
      </label>
      <br />
      <button onClick={handleVerification}>Verify</button>
    </div>
  );
};

export default Screen1;
