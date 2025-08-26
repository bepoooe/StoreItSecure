# 🔒 StoreItSecure - Secure Storage and File Sharing Platform

<div align="center">
  <img src="./public/assets/icons/logo-full-storeit-secure-blue.svg" alt="StoreItSecure Logo" width="300" height="auto" />
  
  <p align="center">
    A modernized secure storage platform with sky blue theme. Built with the latest technologies for enhanced security and user experience.
  </p>

  <p align="center">
    <a href="#features">Features</a> •
    <a href="#tech-stack">Tech Stack</a> •
    <a href="#installation">Installation</a> •
    <a href="#usage">Usage</a> •
    <a href="#api-reference">API</a> •
    <a href="#contributing">Contributing</a>
  </p>

  ![Next.js](https://img.shields.io/badge/Next.js-15.0.2-black?style=for-the-badge&logo=next.js)
  ![React](https://img.shields.io/badge/React-19.0.0--rc-61DAFB?style=for-the-badge&logo=react)
  ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
  ![Appwrite](https://img.shields.io/badge/Appwrite-FD366E?style=for-the-badge&logo=appwrite&logoColor=white)
</div>

## ✨ Features

### 🔐 **Security First**
- **End-to-end encryption** for all file uploads
- **Secure authentication** with OTP verification
- **Role-based access control** for file sharing
- **Session management** with automatic timeout

### 📁 **File Management**
- **Drag & drop upload** with progress tracking
- **Multiple file format support** (documents, images, videos, audio)
- **File preview** and thumbnail generation
- **Advanced search** and filtering capabilities
- **Bulk operations** (delete, download, share)

### 📊 **Analytics & Insights**
- **Storage usage analytics** with visual charts
- **File type distribution** insights
- **Recent activity** tracking
- **Storage optimization** recommendations

### 🎨 **Modern UI/UX**
- **Responsive design** for all devices
- **Sky blue theme** with professional styling
- **Dark/Light mode** support
- **Intuitive navigation** with breadcrumbs
- **Real-time notifications** with toast messages

### 🌐 **Collaboration**
- **File sharing** with customizable permissions
- **Collaboration tools** for team workflows
- **Comment system** for file discussions
- **Version control** for document tracking

## 🚀 Tech Stack

### **Frontend**
- **[Next.js 15.0.2](https://nextjs.org/)** - React framework with server-side rendering
- **[React 19.0.0-rc](https://react.dev/)** - Latest React with concurrent features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Shadcn/ui](https://ui.shadcn.com/)** - Reusable component library

### **Backend & Database**
- **[Appwrite](https://appwrite.io/)** - Backend-as-a-Service platform
- **File Storage** - Appwrite storage buckets
- **Authentication** - Appwrite Auth with OTP
- **Database** - Appwrite NoSQL database

### **UI Components**
- **[Radix UI](https://www.radix-ui.com/)** - Headless UI components
- **[Lucide React](https://lucide.dev/)** - Beautiful icons
- **[Recharts](https://recharts.org/)** - Chart library for analytics
- **[React Hook Form](https://react-hook-form.com/)** - Form validation
- **[React Dropzone](https://react-dropzone.js.org/)** - File upload interface

### **Development Tools**
- **[ESLint](https://eslint.org/)** - Code linting with Prettier integration
- **[Turbopack](https://turbo.build/pack)** - Fast bundler for development
- **[PostCSS](https://postcss.org/)** - CSS processing
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation

## 🛠️ Installation

### Prerequisites
- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager
- **Appwrite** account and project setup

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/StoreItSecure.git
cd StoreItSecure
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Environment Setup
Create a `.env.local` file in the root directory:

```env
# Appwrite Configuration
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT=your_project_id
NEXT_PUBLIC_APPWRITE_DATABASE=your_database_id
NEXT_PUBLIC_APPWRITE_USERS_COLLECTION=your_users_collection_id
NEXT_PUBLIC_APPWRITE_FILES_COLLECTION=your_files_collection_id
NEXT_PUBLIC_APPWRITE_BUCKET=your_storage_bucket_id

# Appwrite Secret Key (Server-side only)
NEXT_APPWRITE_KEY=your_appwrite_secret_key

# Next.js Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Appwrite Setup
1. Create an [Appwrite](https://appwrite.io/) account
2. Create a new project
3. Set up the database collections (follow `setup-collections.md`)
4. Configure storage buckets
5. Update environment variables

### 5. Run the Development Server
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📖 Usage

### **Authentication**
1. **Sign Up**: Create a new account with email verification
2. **Sign In**: Login with existing credentials
3. **OTP Verification**: Two-factor authentication for security

### **File Operations**
1. **Upload Files**: Drag and drop or click to select files
2. **View Files**: Browse files in grid or list view
3. **Search**: Use the search bar to find specific files
4. **Filter**: Filter by file type, date, or size
5. **Download**: Single or bulk download options
6. **Share**: Generate secure sharing links with permissions

### **Dashboard Analytics**
- **Storage Overview**: Visual representation of storage usage
- **File Type Distribution**: Pie chart showing file types
- **Recent Activity**: Timeline of recent file operations
- **Storage Trends**: Historical usage patterns

## 🎨 Theme Customization

The application uses a sky blue theme with customizable colors defined in `tailwind.config.ts`:

```typescript
colors: {
  brand: {
    '100': '#82e2f5',
    DEFAULT: '#00d5ff'
  },
  // ... other colors
}
```

### **Blue-Themed Assets**
All UI assets use blue-themed versions for consistency:
- Logo: `logo-full-storeit-secure-blue.svg`
- Icons: All file type icons use `-light-blue` variants
- Logout: `logout-blue.svg`

## 📡 API Reference

### **Authentication**
```typescript
// Sign up user
const user = await signUpUser(userData);

// Sign in user  
const session = await signInUser(email, password);

// Sign out user
await signOutUser();

// Send OTP
await sendEmailOTP(email);

// Verify OTP
await verifyOTP(accountId, password);
```

### **File Operations**
```typescript
// Upload file
const file = await uploadFile(file, ownerId, accountId, path);

// Get files
const files = await getFiles(types, searchText, sort, limit);

// Delete file
await deleteFile(fileId, bucketFileId);

// Rename file
await renameFile(fileId, name);

// Get file preview
const url = getFilePreview(fileId, type);
```

## 🗂️ Project Structure

```
StoreItSecure/
├── app/                          # Next.js app directory
│   ├── (auth)/                   # Authentication pages
│   │   ├── sign-in/              # Sign in page
│   │   └── sign-up/              # Sign up page
│   ├── (root)/                   # Main application pages
│   │   ├── page.tsx              # Dashboard
│   │   └── [type]/               # Dynamic file type pages
│   ├── globals.css               # Global styles
│   └── layout.tsx                # Root layout
├── components/                   # Reusable components
│   ├── ui/                       # UI components (Shadcn)
│   ├── ActionDropdown.tsx        # File actions menu
│   ├── AuthForm.tsx              # Authentication forms
│   ├── FileUploader.tsx          # File upload component
│   ├── Header.tsx                # Application header
│   ├── Sidebar.tsx               # Navigation sidebar
│   └── ...                       # Other components
├── lib/                          # Utility functions
│   ├── actions/                  # Server actions
│   │   ├── file.actions.ts       # File operations
│   │   └── user.actions.ts       # User operations
│   ├── appwrite/                 # Appwrite configuration
│   └── utils.ts                  # Helper functions
├── public/                       # Static assets
│   └── assets/                   # Icons and images
├── types/                        # TypeScript definitions
├── constants/                    # Application constants
└── hooks/                        # Custom React hooks
```

## 🔧 Configuration

### **Tailwind CSS**
The application uses Tailwind CSS with custom configurations:
- Custom colors for blue theme
- Custom shadows and animations
- Responsive breakpoints
- Component-specific utilities

### **ESLint & Prettier**
Code quality is maintained with:
- ESLint with Standard config
- Prettier for code formatting
- Tailwind CSS plugin for class sorting
- TypeScript strict mode

## 🚀 Deployment

### **Vercel (Recommended)**
1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables
4. Deploy with automatic builds

### **Other Platforms**
```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/new-feature`
3. **Commit changes**: `git commit -m 'Add new feature'`
4. **Push to branch**: `git push origin feature/new-feature`
5. **Submit a pull request**

### **Development Guidelines**
- Follow TypeScript best practices
- Use conventional commit messages
- Add tests for new features
- Update documentation
- Ensure responsive design

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **[Appwrite](https://appwrite.io/)** for the robust backend platform
- **[Shadcn/ui](https://ui.shadcn.com/)** for the beautiful component library
- **[Vercel](https://vercel.com/)** for hosting and deployment
- **[Next.js](https://nextjs.org/)** team for the amazing framework

## 📞 Support

For support and questions:
- 📧 Email: support@storeitsecure.com
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/StoreItSecure/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/yourusername/StoreItSecure/discussions)

---

<div align="center">
  <p>Made with ❤️ by the StoreItSecure team</p>
  <p>⭐ Star this repository if you find it helpful!</p>
</div>
