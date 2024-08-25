// // import { MongoClient } from 'mongodb';

// // // Fetch the MongoDB URI from environment variables
// // const uri = process.env.MONGODB_URI;

// // if (!uri) {
// //     console.error('MONGODB_URI is not defined in environment variables');
// //     process.exit(1); // Exit the process if the environment variable is missing
// // }

// // // Initialize MongoClient
// // const client = new MongoClient(uri);

// // let clientPromise: Promise<MongoClient>;

// // if (process.env.NODE_ENV === 'development') {
// //     // In development mode, use a global variable to prevent multiple connections
// //     if (!(global as any)._mongoClientPromise) {
// //         (global as any)._mongoClientPromise = client.connect();
// //     }
// //     clientPromise = (global as any)._mongoClientPromise;
// // } else {
// //     clientPromise = client.connect();
// // }

// // export default clientPromise;


// import { MongoClient } from 'mongodb';

// // Fetch the MongoDB URI from environment variables
// const uri = process.env.MONGODB_URI;

// if (!uri) {
//     console.error('MONGODB_URI is not defined in environment variables');
//     process.exit(1); // Exit the process if the environment variable is missing
// }

// // Initialize MongoClient
// const client = new MongoClient(uri);

// let clientPromise: Promise<MongoClient> | null = null;

// // Function to connect to MongoDB
// export async function connectMongoDb(): Promise<MongoClient> {
//     if (!clientPromise) {
//         clientPromise = client.connect();
//     }
//     await clientPromise; // Ensure connection is established
//     return client;
// }




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




