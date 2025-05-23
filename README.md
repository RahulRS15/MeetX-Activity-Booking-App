# MeetX Backend API

## Setup

1. Clone the repo
2. Install dependencies with `npm install`
3. Create a `.env` file using `.env.example`
4. Run the server: `npm run dev`

## Features

- User registration/login with JWT
- Public activity listing
- Book activities (JWT auth)
- View personal bookings

## Tech Stack

- Node.js, Express.js
- MongoDB
- JWT for authentication
- bcrypt for password hashing
- express-validator for input validation

## Postman Collection

Import the included Postman collection to test the APIs.
 
## Auth 
Register-
POST- http://localhost:5000/api/auth/register

{
  "name": "John Doe",
  "email": "jo@example.com",
  "phone": "9876543210",
  "password": "test1234"
}

Login-
POST - http://localhost:5000/api/auth/login
{
  "email": "joh@example.com",
  "password": "test1234"
}

## Activity
get all activites-
GET - http://localhost:5000/api/activities 

## Booking 
POST - http://localhost:5000/api/bookings
{
  "activityId": "681d7c83da9a30820727016e"
}

Bearer token -Auth type(add bearer token)

{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MWQ3OTVkZmQ1MjhlNTZlODNmNzIwNyIsImlhdCI6MTc0Njc2NTU2NSwiZXhwIjoxNzQ2ODUxOTY1fQ.9sL27Pz2CyE2VI_zksajSoYFOVTN3-31JtSk0wUfcjY"
}


