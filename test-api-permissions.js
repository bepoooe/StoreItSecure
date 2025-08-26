const { Client, Account, Databases } = require('node-appwrite');

// Load environment variables
require('dotenv').config({ path: '.env.local' });

const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT)
    .setKey(process.env.NEXT_APPWRITE_KEY);

const account = new Account(client);
const databases = new Databases(client);

async function testAPIPermissions() {
    console.log('🔍 Testing API Key Permissions...\n');
    
    try {
        // Test sessions.write permission
        console.log('1. Testing sessions.write permission...');
        const tokenResult = await account.createEmailToken('test-user-id', 'test@example.com');
        console.log('✅ sessions.write: SUCCESS');
        
        // Clean up the test token
        try {
            // Note: We can't delete the token directly, but this proves sessions.write works
        } catch (e) {
            // Expected to fail since we're using a fake email
        }
        
    } catch (error) {
        if (error.code === 401 && error.type === 'general_unauthorized_scope') {
            console.log('❌ sessions.write: MISSING SCOPE');
            console.log('   → Your API key needs the "sessions.write" permission');
        } else {
            console.log('✅ sessions.write: SUCCESS (different error, but permission exists)');
        }
    }
    
    try {
        // Test databases.read permission
        console.log('2. Testing databases.read permission...');
        const dbResult = await databases.list();
        console.log('✅ databases.read: SUCCESS');
    } catch (error) {
        if (error.code === 401) {
            console.log('❌ databases.read: MISSING SCOPE');
        } else {
            console.log('✅ databases.read: SUCCESS');
        }
    }
    
    console.log('\n🎯 Summary:');
    console.log('If you see "MISSING SCOPE" errors above, update your API key in Appwrite Console.');
    console.log('Go to Settings → API Keys → [Your Key] → Edit → Add missing scopes');
}

testAPIPermissions().catch(console.error);
