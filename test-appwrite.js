const { Client, Databases, Account } = require('node-appwrite');

// Test Appwrite connection
async function testAppwriteConnection() {
  const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("68ad4a0f0034046379a8")
    .setKey("standard_e702ff0b186e7a857e5686e3130adf21424145059dc44f32d0de8f4357db196d21cf90a1b2da8ab0cbf9ca8e90104714e82c94bdfa21f4b39fc1aada41698b9d42858c295c4c2d8cf10ee14c26e459f217fb6c4f5cc0d08b24364be321d7faeee7128faed78b2a1659bc4e14635ca966f7e761c087ee771ad91bc6dc9776184a");

  try {
    console.log("Testing Appwrite connection...");
    
    // Test database connection
    const databases = new Databases(client);
    
    console.log("1. Testing database connection...");
    const database = await databases.get("68ad4c7800380bf97f26");
    console.log("✅ Database connected:", database.name);
    
    console.log("2. Testing users collection...");
    const usersCollection = await databases.getCollection("68ad4c7800380bf97f26", "68ad4cca003a640ff6c4");
    console.log("✅ Users collection found:", usersCollection.name);
    console.log("   Attributes:", usersCollection.attributes.map(attr => `${attr.key} (${attr.type})`));
    
    console.log("3. Testing files collection...");
    const filesCollection = await databases.getCollection("68ad4c7800380bf97f26", "68ad4d7b00334d941725");
    console.log("✅ Files collection found:", filesCollection.name);
    console.log("   Attributes:", filesCollection.attributes.map(attr => `${attr.key} (${attr.type})`));
    
    console.log("4. Testing storage bucket...");
    const { Storage } = require('node-appwrite');
    const storage = new Storage(client);
    const bucket = await storage.getBucket("68ad4ea1003ad4a48527");
    console.log("✅ Storage bucket found:", bucket.name);
    
    console.log("\n🎉 All Appwrite services are properly configured!");
    
  } catch (error) {
    console.error("❌ Error testing Appwrite connection:");
    console.error("Error details:", error.message);
    console.error("Error type:", error.type);
    console.error("Error code:", error.code);
  }
}

testAppwriteConnection();
