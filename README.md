# JWT Authentication System

A complete JWT authentication system built with Node.js, React, and TypeScript. This project includes user registration, login, logout functionality, and a protected dashboard with JWT token storage in localStorage.

## Features

- 🔐 **JWT Authentication**: Secure token-based authentication
- 👤 **User Management**: Registration, login, and logout functionality
- 🛡️ **Protected Routes**: Route protection with authentication middleware
- 💾 **Local Storage**: JWT tokens stored securely in browser localStorage
- 🎨 **Modern UI**: Beautiful, responsive interface with Tailwind CSS
- 📱 **TypeScript**: Full type safety for both frontend and backend
- 🔒 **Security**: Password hashing, rate limiting, and CORS protection

## Project Structure

```
JWTAuth/
├── backend/                 # Node.js + Express + TypeScript
│   ├── src/
│   │   ├── config/         # Configuration files
│   │   ├── controllers/    # Route controllers
│   │   ├── middleware/     # Authentication & validation middleware
│   │   ├── routes/         # API routes
│   │   ├── services/       # Business logic
│   │   └── types/          # TypeScript type definitions
│   ├── package.json
│   └── tsconfig.json
├── frontend/               # React + TypeScript
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── context/        # React context for auth state
│   │   ├── services/       # API service layer
│   │   └── types/          # TypeScript type definitions
│   ├── package.json
│   └── tsconfig.json
└── package.json            # Root package.json for workspace
```

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd JWTAuth
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Install backend dependencies
   cd backend
   npm install
   
   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the `backend` directory:
   ```env
   PORT=5000
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   JWT_EXPIRES_IN=24h
   NODE_ENV=development
   ```

## Running the Application

### Development Mode

1. **Start the backend server**
   ```bash
   cd backend
   npm run dev
   ```
   The backend will run on `http://localhost:5000`

2. **Start the frontend application**
   ```bash
   cd frontend
   npm start
   ```
   The frontend will run on `http://localhost:3000`

### Production Mode

1. **Build the frontend**
   ```bash
   cd frontend
   npm run build
   ```

2. **Start the backend**
   ```bash
   cd backend
   npm run build
   npm start
   ```

## API Endpoints

### Authentication Endpoints

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user (requires authentication)
- `GET /api/auth/profile` - Get user profile (requires authentication)

### Health Check

- `GET /health` - Server health check

## Usage

1. **Register a new account**
   - Navigate to `http://localhost:3000/register`
   - Fill in your name, email, and password
   - Click "Create Account"

2. **Login to your account**
   - Navigate to `http://localhost:3000/login`
   - Enter your email and password
   - Click "Sign in"

3. **Access the dashboard**
   - After successful login, you'll be redirected to the dashboard
   - View your user information and account details
   - Use the logout button to sign out

## Security Features

- **Password Hashing**: Passwords are hashed using bcrypt
- **JWT Tokens**: Secure token-based authentication
- **Rate Limiting**: API rate limiting to prevent abuse
- **CORS Protection**: Configured CORS for security
- **Input Validation**: Request validation using Joi
- **Helmet**: Security headers middleware

## Frontend Features

- **Responsive Design**: Mobile-friendly interface
- **Form Validation**: Client-side validation with error messages
- **Loading States**: Loading indicators for better UX
- **Protected Routes**: Automatic redirection for unauthenticated users
- **Token Management**: Automatic token handling and storage

## Backend Features

- **TypeScript**: Full type safety
- **Express.js**: Fast, unopinionated web framework
- **Middleware**: Authentication and validation middleware
- **Error Handling**: Comprehensive error handling
- **In-Memory Storage**: Simple user storage (replace with database in production)

## Customization

### Adding a Database

Replace the in-memory storage in `backend/src/services/userService.ts` with your preferred database:

```typescript
// Example with MongoDB
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});
```

### Environment Variables

Update the environment variables in `backend/config/env.ts` to match your production setup:

```typescript
export const config = {
  port: process.env.PORT || 5000,
  jwtSecret: process.env.JWT_SECRET || 'your-production-secret',
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '24h',
  nodeEnv: process.env.NODE_ENV || 'production'
};
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

If you encounter any issues or have questions, please open an issue on the repository.
