import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/register';

let clientPromise: Promise<MongoClient>;

// Check if the environment is development or production
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  let cachedClient: MongoClient;

  // Only create the cached client if it doesn't exist
  if (!cachedClient) {
    cachedClient = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    clientPromise = cachedClient.connect().then(() => cachedClient);
  }
} else {
  // In production, create a new client and connect to the database
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  clientPromise = client.connect();
}

// Export clientPromise to be used in your application
export default clientPromise;
