# 🔧 Collection Permissions Setup Guide

## Critical: Your collections need proper permissions for users to access them.

### **Step 1: Users Collection Permissions**

1. Go to your Appwrite Console → Databases → [Your Database] → users collection
2. Click on **Settings** tab
3. In **Permissions** section, add these permissions:

**Read Permissions:**
- `users` (any authenticated user can read user documents)

**Write Permissions:**  
- `users` (any authenticated user can write user documents)

**Or for more security:**
- `user:[USER_ID]` (only the specific user can read/write their own document)

### **Step 2: Files Collection Permissions**

1. Go to files collection → Settings → Permissions
2. Add these permissions:

**Read Permissions:**
- `users` (any authenticated user can read file documents)

**Write Permissions:**
- `users` (any authenticated user can write file documents)

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
