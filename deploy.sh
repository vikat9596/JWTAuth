#!/bin/bash

echo "🚀 Starting deployment build process..."

# Build frontend
echo "📦 Building frontend..."
cd frontend
npm run build
cd ..

# Build backend
echo "🔧 Building backend..."
cd backend
npm run build
cd ..

# Create deployment package
echo "📋 Creating deployment package..."
mkdir -p deployment
cp -r frontend/build/* deployment/frontend/
cp -r backend/dist/* deployment/backend/
cp backend/package.json deployment/backend/
cp deploy-instructions.md deployment/

echo "✅ Deployment build complete!"
echo ""
echo "📁 Deployment files are ready in the 'deployment' folder:"
echo "   - Frontend: deployment/frontend/"
echo "   - Backend: deployment/backend/"
echo "   - Instructions: deployment/deploy-instructions.md"
echo ""
echo "📋 Next steps:"
echo "1. Upload frontend files to your cPanel public_html/"
echo "2. Upload backend files to your cPanel Node.js app directory"
echo "3. Configure environment variables in cPanel"
echo "4. Update the API URL in frontend configuration"
