import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/register';

let cachedClient: MongoClient | null = null; // Initialize with null
let clientPromise: Promise<MongoClient>; // Declare clientPromise

// Check if we are in the development environment
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  // Only create the cached client if it doesn't exist
  if (!cachedClient) {
    cachedClient = new MongoClient(uri); // Initialize client
    clientPromise = cachedClient.connect().then(() => {
      // After connecting, ensure cachedClient is not null
      return cachedClient as MongoClient; // Assert type to MongoClient
    });
  } else {
    clientPromise = Promise.resolve(cachedClient); // Use cached client if it exists
  }
} else {
  // In production, create a new client and connect to the database
  const client = new MongoClient(uri);
  clientPromise = client.connect(); // Set promise for production
}

// Export clientPromise to be used in your application
export default clientPromise;
