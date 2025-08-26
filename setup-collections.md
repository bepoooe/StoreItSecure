# �️ Appwrite Database Collections Setup Guide

This guide will help you set up the required database collections and storage buckets in Appwrite for the StoreItSecure application.

## 📋 Prerequisites

- Appwrite account ([Sign up here](https://appwrite.io/))
- Created project in Appwrite Console
- Project ID from your Appwrite dashboard

## 🔨 Database Setup

### 1. Create Database

1. Navigate to your Appwrite project
2. Go to **Databases** section
3. Click **Create Database**
4. Name: `storeit-secure-db`
5. Database ID: `store-it-secure` (or your preferred ID)

### 2. Users Collection

Create a collection for user data:

**Collection Details:**
- **Name**: `users`
- **Collection ID**: `users`
- **Permissions**: 
  - Read: `users`
  - Write: `users`

**Attributes:**
```json
{
  "fullName": {
    "type": "string",
    "size": 255,
    "required": true
  },
  "email": {
    "type": "string", 
    "size": 255,
    "required": true
  },
  "avatar": {
    "type": "url",
    "required": false
  },
  "accountId": {
    "type": "string",
    "size": 255,
    "required": true
  }
}
```

**Indexes:**
- `email` (unique, asc)
- `accountId` (unique, asc)

### 3. Files Collection

Create a collection for file metadata:

**Collection Details:**
- **Name**: `files`
- **Collection ID**: `files`
- **Permissions**:
  - Read: `users`
  - Write: `users`

**Attributes:**
```json
{
  "name": {
    "type": "string",
    "size": 255,
    "required": true
  },
  "type": {
    "type": "string",
    "size": 100,
    "required": true
  },
  "size": {
    "type": "integer",
    "required": true
  },
  "extension": {
    "type": "string",
    "size": 10,
    "required": true
  },
  "url": {
    "type": "url",
    "required": true
  },
  "bucketFileId": {
    "type": "string",
    "size": 255,
    "required": true
  },
  "owner": {
    "type": "string",
    "size": 255,
    "required": true
  },
  "accountId": {
    "type": "string", 
    "size": 255,
    "required": true
  },
  "users": {
    "type": "string",
    "array": true,
    "required": false
  }
}
```

**Indexes:**
- `owner` (asc)
- `accountId` (asc)
- `type` (asc)
- `bucketFileId` (unique, asc)

## 🗄️ Storage Setup

### 1. Create Storage Bucket

1. Navigate to **Storage** section
2. Click **Create Bucket**
3. **Name**: `files`
4. **Bucket ID**: `files`
5. **File Security**: Enabled
6. **Maximum File Size**: `50MB` (or your preferred limit)
7. **Allowed File Extensions**: 
   ```
   jpg, jpeg, png, gif, webp, svg, pdf, doc, docx, txt, csv, 
   xls, xlsx, mp4, avi, mov, wmv, mp3, wav, aac, flac
   ```

### 2. Storage Permissions

Set the following permissions for the storage bucket:

**Read Permissions:**
- `users` (authenticated users can read files they have access to)

**Write Permissions:** 
- `users` (authenticated users can upload files)

**Delete Permissions:**
- `users` (users can delete their own files)

## 🔑 API Keys Setup

### 1. Create API Key

1. Go to **Settings** → **API Keys**
2. Click **Create API Key**
3. **Name**: `storeit-secure-api`
4. **Scopes**: Select all required scopes:
   - `databases.read`
   - `databases.write`
   - `files.read`
   - `files.write`
   - `users.read`
   - `users.write`
   - `sessions.write`

### 2. Environment Variables

Add these to your `.env.local` file:

```env
# Appwrite Configuration
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT=your_project_id_here
NEXT_PUBLIC_APPWRITE_DATABASE=store-it-secure
NEXT_PUBLIC_APPWRITE_USERS_COLLECTION=users
NEXT_PUBLIC_APPWRITE_FILES_COLLECTION=files
NEXT_PUBLIC_APPWRITE_BUCKET=files

# Server-side API Key
NEXT_APPWRITE_KEY=your_api_key_here
```

## 🔐 Authentication Setup

### 1. Configure Auth Settings

1. Navigate to **Auth** section
2. Configure **Settings**:
   - **Session Limit**: `10` (or your preference)
   - **Session Duration**: `365 days`
   - **Password History**: `0`
   - **Password Dictionary**: Enabled
   - **Personal Data**: Enabled

### 2. Enable Auth Methods

Enable the following authentication methods:
- ✅ **Email/Password**
- ✅ **Magic URL** (optional)
- ✅ **Email OTP** (required for 2FA)

### 3. Configure Email Templates

Customize email templates for:
- **Email Verification**
- **Password Reset** 
- **Magic URL**
- **OTP Email**

## 📧 Email Configuration (Optional)

For production, configure SMTP:

1. Go to **Settings** → **SMTP**
2. Configure your email provider:
   - **Host**: Your SMTP host
   - **Port**: SMTP port (587 for TLS)
   - **Username**: Your email
   - **Password**: Your email password
   - **Secure**: TLS enabled

## 🧪 Testing the Setup

### 1. Test Database Connection

Run this test in your application:

```javascript
// test-appwrite.js
const { Client, Databases } = require('node-appwrite');

const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT)
    .setKey(process.env.NEXT_APPWRITE_KEY);

const databases = new Databases(client);

async function testConnection() {
    try {
        const response = await databases.listCollections(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE
        );
        console.log('✅ Database connection successful');
        console.log('Collections:', response.collections.map(c => c.name));
    } catch (error) {
        console.error('❌ Database connection failed:', error);
    }
}

testConnection();
```

### 2. Test Storage

```javascript
// test-storage.js  
const { Client, Storage } = require('node-appwrite');

const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT)
    .setKey(process.env.NEXT_APPWRITE_KEY);

const storage = new Storage(client);

async function testStorage() {
    try {
        const response = await storage.getBucket(
            process.env.NEXT_PUBLIC_APPWRITE_BUCKET
        );
        console.log('✅ Storage connection successful');
        console.log('Bucket:', response.name);
    } catch (error) {
        console.error('❌ Storage connection failed:', error);
    }
}

testStorage();
```

## 🚨 Security Considerations

### 1. Collection Permissions

Ensure proper permissions are set:
- Users can only read/write their own data
- Files are accessible only to owners and shared users
- Admin collections have restricted access

### 2. File Upload Security

Configure file upload restrictions:
- **File size limits**: Prevent large file uploads
- **File type validation**: Only allow safe file types
- **Virus scanning**: Consider third-party integration
- **Content validation**: Validate file contents

### 3. Rate Limiting

Set up rate limiting for:
- File uploads
- Authentication attempts  
- API requests
- Search queries

## 🔧 Troubleshooting

### Common Issues

1. **Permission Denied Errors**
   - Check collection permissions
   - Verify user authentication
   - Ensure API key has correct scopes

2. **File Upload Failures**
   - Check bucket permissions
   - Verify file size limits
   - Confirm allowed file extensions

3. **Database Connection Issues**
   - Verify environment variables
   - Check API key validity
   - Confirm project ID

### Debug Commands

```bash
# Test API connection
npm run test:appwrite

# Check environment variables
npm run env:check

# Validate permissions
npm run test:permissions
```

## 📚 Additional Resources

- [Appwrite Documentation](https://appwrite.io/docs)
- [Appwrite Console](https://cloud.appwrite.io)
- [Community Support](https://appwrite.io/discord)
- [GitHub Repository](https://github.com/appwrite/appwrite)

---

<div align="center">
  <p>✅ Setup Complete! Your Appwrite backend is ready for StoreItSecure.</p>
</div>

### **Step 3: Storage Bucket Permissions**

1. Go to Storage → [Your Bucket] → Settings → Permissions
2. Add these permissions:

**Read Permissions:**
- `users`

**Write Permissions:**
- `users`

**Delete Permissions:**
- `users`

---

## 🚨 **IMPORTANT NOTES:**

1. **Without proper permissions, authenticated users can't access the collections**
2. **This is why you're getting "user_unauthorized" errors after successful login**
3. **The permissions need to be set in the Appwrite Console, not in code**

## 🔄 **After Setting Permissions:**

1. Save all permission changes in Appwrite Console
2. Clear your browser cookies/localStorage 
3. Try signing in again
4. The login loop should be resolved
