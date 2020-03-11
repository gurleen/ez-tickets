# ez-tickets

## Installing and running
After cloning:
```
npm install
npm start
```
The app will run on `http://localhost:3000`

## API Documentation
## Auth
Authentication is done via RFC 7519 JSON Web Tokens. The only endpoint to not require
this token for authentication is `/auth/login`, which provides a token.

#### POST Register

| Path        | `/auth/register/`                |
| ----------- | ------------------------------------------ |
| Content-Type | `application/json`                        |
| Request Content | Two items: `username` and `password` for the new account. |
| Response    | `OK` or an `error` depending on the success of the operation.             |
| Example     | `POST /auth/register/`          |

#### POST Login

| Path        | `/auth/login/`                |
| ----------- | ------------------------------------------ |
| Content-Type | `application/json`                        |
| Request Content | Two items: `username` and `password` of the user's account. |
| Response    | An `error` or a `status: OK` with a `token` for future auth requests.       |
| Example     | `POST /auth/login/`        |