const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;

app.use(bodyParser.json());

const DEFAULT_ACCOUNT_NUMBER = "026291800001191"

// Mock Penny Drop API endpoint
app.get('/bank/:ifsc/accounts/:account_number/verify', (req, res) => {
   const { ifsc, account_number } = req.params;
   const { name, mobile } = req.query;
   console.log("TEST")
   // Mock response
   const successResponse = {
      utr: '210219578183',
      account_exists: true,
      amount_deposited: 1,
      message: 'Bank Account details verified successfully',
      name_at_bank: name
   };

   const failureResponse = {
      utr: '123456789', // Change this to a predefined value that should trigger a failure
      account_exists: false,
      amount_deposited: 0,
      message: 'Failed to verify bank account details',
      name_at_bank: ''
   };
   setTimeout(()=>{
      // Check condition for failure response
   if (req.params.account_number && req.params.account_number != DEFAULT_ACCOUNT_NUMBER) {
      res.json(failureResponse);
   } else {
      res.json(successResponse);
   }

   }, 5000)
   
});

// Start the server
app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
});
