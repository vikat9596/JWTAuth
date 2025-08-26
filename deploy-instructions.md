# cPanel Deployment Instructions

## 📦 **Build Files Ready**

Your application has been built and is ready for deployment to cPanel.

### **Frontend Build Location:**
```
frontend/build/
```

### **Backend Build Location:**
```
backend/dist/
```

## 🚀 **Deployment Steps**

### **Option 1: Separate Subdomains (Recommended)**

#### **Frontend Deployment:**
1. Upload all files from `frontend/build/` to your main domain's `public_html/` folder
2. The `.htaccess` file is already included for React routing

#### **Backend Deployment:**
1. Create a subdomain (e.g., `api.yourdomain.com`)
2. Upload all files from `backend/dist/` to the subdomain's directory
3. Update the frontend API configuration with your subdomain URL

### **Option 2: Same Domain**

#### **Frontend:**
1. Upload `frontend/build/` contents to `public_html/`

#### **Backend:**
1. Upload `backend/dist/` contents to `public_html/api/`
2. Update frontend API baseURL to `/api`

## ⚙️ **Environment Configuration**

### **Backend Environment Variables:**
Create a `.env` file in your backend directory with:
```env
PORT=5000
JWT_SECRET=your-super-secure-production-secret
JWT_EXPIRES_IN=24h
NODE_ENV=production
```

### **Frontend Configuration:**
Update `frontend/src/services/api.ts` with your actual domain:
```typescript
baseURL: process.env.NODE_ENV === 'production' 
  ? 'https://yourdomain.com/api'  // Your actual domain
  : '/api',
```

## 🔧 **cPanel Node.js Setup**

1. **Enable Node.js:**
   - Go to cPanel → Node.js Selector
   - Create a new Node.js app
   - Set the Node.js version to 18.x or higher
   - Set the application root to your backend directory

2. **Configure the App:**
   - Application URL: Your subdomain or `/api` path
   - Application startup file: `index.js`
   - Node.js version: 18.x or higher

3. **Install Dependencies:**
   - Upload `backend/package.json` and `backend/package-lock.json`
   - Run `npm install --production` in the backend directory

## 📋 **File Structure for cPanel**

### **Frontend (public_html/):**
```
public_html/
├── .htaccess
├── index.html
├── static/
│   ├── css/
│   ├── js/
│   └── media/
└── asset-manifest.json
```

### **Backend (api subdomain or /api folder):**
```
api/
├── .htaccess
├── index.js
├── package.json
├── node_modules/
├── config/
├── controllers/
├── middleware/
├── routes/
├── services/
└── types/
```

## 🔒 **Security Considerations**

1. **Change JWT Secret:** Update the JWT secret in production
2. **HTTPS:** Ensure your domain uses HTTPS
3. **CORS:** Update CORS settings for your production domain
4. **Environment Variables:** Use cPanel's environment variable feature

## 🧪 **Testing After Deployment**

1. **Frontend:** Visit your domain to ensure the React app loads
2. **Backend:** Test the health endpoint: `https://yourdomain.com/api/health`
3. **Authentication:** Test registration and login functionality

## 📞 **Troubleshooting**

- **500 Errors:** Check Node.js logs in cPanel
- **CORS Issues:** Verify CORS configuration in backend
- **Routing Issues:** Ensure `.htaccess` files are uploaded
- **API Connection:** Verify the API baseURL in frontend configuration
