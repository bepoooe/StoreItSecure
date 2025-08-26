# StoreItSecure - Secure Storage Platform

<div align="center">
  <img src="./public/assets/icons/logo-full-storeit-secure-blue.svg" alt="StoreItSecure Logo" width="300" height="auto" />
  
  <p align="center">
    A modern secure storage platform built with Next.js and Appwrite.
  </p>
</div>

## Features

- Secure file upload and storage
- User authentication with OTP verification
- File management with search and filtering
- Storage analytics dashboard
- Responsive design with blue theme
- File sharing with permissions

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend**: Appwrite (Auth, Database, Storage)
- **UI Components**: Shadcn/ui, Radix UI
- **Charts**: Recharts

## Installation

1. Clone the repository:
```bash
git clone https://github.com/bepoooe/StoreItSecure.git
cd StoreItSecure
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file:
```env
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT=your_project_id
NEXT_PUBLIC_APPWRITE_DATABASE=your_database_id
NEXT_PUBLIC_APPWRITE_USERS_COLLECTION=your_users_collection_id
NEXT_PUBLIC_APPWRITE_FILES_COLLECTION=your_files_collection_id
NEXT_PUBLIC_APPWRITE_BUCKET=your_storage_bucket_id
NEXT_APPWRITE_KEY=your_appwrite_secret_key
```

4. Set up Appwrite:
   - Create an Appwrite project
   - Set up database collections (see `setup-collections.md`)
   - Configure storage buckets

5. Run development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. **Sign up** with email verification
2. **Upload files** via drag and drop
3. **Manage files** with search, filter, and organize
4. **View analytics** on storage usage
5. **Share files** with secure links

## Credits

Created by [bepoooe](https://github.com/bepoooe)

## License

MIT License
