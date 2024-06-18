# Authentication-API-project-with-JWT-tokens
This project is a basic Node.js application using Express, MongoDB, and JWT for creating a user authentication system. It consists of several components that handle different aspects of the application, including server setup, routing, user registration, login, and validation.

### Project Components

1. **Server Setup (index.js)**
   - The server is set up using Express and listens on a port defined in the `.env` file or defaults to 8000.
   - `body-parser` middleware is used to parse JSON request bodies.
   - Routes are prefixed with `/api/v1` and handled by the `routes` module.
   - Environment variables are loaded using `dotenv`.
   - The MongoDB connection is established through the `db` configuration file.

2. **Routes (routes/index.js)**
   - Routes are defined using Express Router.
   - Three routes are set up:
     - `POST /register`: Registers a new user with validation middleware.
     - `POST /login`: Logs in an existing user with validation middleware.
     - `GET /users`: Fetches a list of users, protected by JWT authentication middleware.

3. **User Controller (userController/index.js)**
   - **registerUser**: Handles user registration by validating the request body, encrypting the password, saving the user to MongoDB, and returning a response.
   - **loginUser**: Handles user login by validating credentials, generating a JWT token if successful, and returning the token and user details.
   - **getUsers**: Fetches and returns a list of users excluding their passwords.

4. **User Model (models/UserModel.js)**
   - Defines the schema for the `users` collection in MongoDB using Mongoose.
   - Fields include `fullName`, `email`, `password`, and `createdAt`.

5. **Validation (utils/userValidation.js)**
   - **userRegisterValidate**: Validates user registration data using Joi.
   - **userLoginValidate**: Validates user login data using Joi.

### Detailed Workflow

1. **User Registration**
   - A POST request to `/api/v1/register` with user details (fullName, email, password).
   - The request body is validated using Joi.
   - The password is encrypted using bcrypt.
   - The user is saved to MongoDB, excluding the password from the response.

2. **User Login**
   - A POST request to `/api/v1/login` with email and password.
   - The request body is validated using Joi.
   - The email is checked against the database, and the password is compared using bcrypt.
   - If authentication is successful, a JWT token is generated and returned.

3. **Fetching Users**
   - A GET request to `/api/v1/users`.
   - The request is protected by the `ensureAuthenticated` middleware, which checks for a valid JWT token.
   - If authenticated, the list of users is returned, excluding passwords.

### Key Technologies

- **Express**: For setting up the server and handling routing.
- **MongoDB (Mongoose)**: For data storage and schema definition.
- **JWT (jsonwebtoken)**: For generating and verifying authentication tokens.
- **bcrypt**: For password hashing.
- **Joi**: For request data validation.
- **dotenv**: For managing environment variables.

This project provides a basic but comprehensive example of setting up user authentication in a Node.js application, showcasing key practices like using middleware for validation, password encryption, and protecting routes with JWT.
