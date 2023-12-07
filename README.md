# Penny-Drop-Verify
React JS mobile web app for Uber cab drivers to verify bank accounts through a Penny Drop API, integrating a Node server with a mock endpoint for testing

![images](https://github.com/punyaslokdutta/Penny-Drop-Verify/assets/13198518/9067ffa7-a371-42c8-bff9-2d964ad3931a)

## Verification Steps

### 1. IFSC Verification

API server that serves Razorpay's IFSC API. API Root is [https://ifsc.razorpay.com/](https://ifsc.razorpay.com/)

#### Routes:

- `/:ifsc`
  - Method: GET
  - Response: JSON

A sample response is:

```json
{
	"BRANCH": "Delhi Nagrik Sehkari Bank IMPS",
	"CENTRE": "DELHI",
	"DISTRICT": "DELHI",
	"STATE": "MAHARASHTRA",
	"ADDRESS": "720, NEAR GHANTAGHAR, SUBZI MANDI, DELHI - 110007",
	"CONTACT": "+919560344685",
	"IMPS": true,
	"CITY": "MUMBAI",
	"UPI": true,
	"MICR": "110196002",
	"RTGS": true,
	"NEFT": true,
	"SWIFT": "",
	"ISO3166": "IN-MH",
	"BANK": "Delhi Nagrik Sehkari Bank",
	"BANKCODE": "DENS",
	"IFSC": "YESB0DNB002"
}

## 2. Account Verification using Penny Drop API

### Request:

Follow the below guidelines to pass IFSC and account number for penny drop verification

#### Path Parameters:

- `ifsc` (string): Alphanumeric code is used to identify the bank branches. Max length: 11 characters. Example: SBIN0021745
- `account_number` (string): Bank account number. Max length: 20 characters. Example: 026291800001191

#### Query Parameters:

- `name` (string): Name of the Account holder. Example: John Doe
- `mobile` (string): Mobile number of the account holder. Example: 9999999999

#### Sample CURL:

```bash
curl --location --request GET 'https://api.sandbox.co.in/bank/HDFC0000001/accounts/026291800001191/verify?name=JOHN%20DOE&mobile=9999999999' \
--header 'Authorization: eyJhbGciOiJIUzUxMiJ9.eyJhdWQiOiJBUEkiLCJyZWZyZXNoX3Rva2VuIjoi...YOUR_TOKEN_HERE...' \
--header 'x-api-key: key_live_Ade**************************Uxs' \
--header 'x-api-version: 1.0.0'

```json
{
	"utr": "210219578183",
	"account_exists": true,
	"amount_deposited": 1,
	"message": "Bank Account details verified successfully",
	"name_at_bank": "John Doe"
}
```


