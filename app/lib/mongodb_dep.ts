import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/register';
let cachedClient: MongoClient | null = null;

async function connectMongoDb() {
    if (!cachedClient) {
        cachedClient = new MongoClient(uri); // Removed deprecated options
        try {
            await cachedClient.connect();
            console.log('Connected to MongoDB');
        } catch (error) {
            // Type assertion or narrowing
            if (error instanceof Error) {
                console.error('Failed to connect to MongoDB:', error.message); // Log error message
            } else {
                console.error('Failed to connect to MongoDB:', error); // Fallback for non-standard errors
            }
        }
    }
    return cachedClient;
}

export { connectMongoDb };
