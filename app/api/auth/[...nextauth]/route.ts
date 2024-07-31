import NextAuth, { NextAuthOptions, User, Account, Profile } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { connectMongoDb } from '../../../lib/mongodb';

const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
        }),
    ],

    callbacks: {
        async signIn({
            user,
            account,
            profile,
            credentials,
        }: {
            user: User;
            account: Account | null; // Account can be null
            profile?: Profile | null; // Profile can be optional
            credentials?: Record<string, unknown>; // This can be an object if you're using credentials strategy
        }) {
            // Handle sign-in logic
            try {
                const client = await connectMongoDb();
                const database = client.db('register');
                const usersCollection = database.collection('users');

                await usersCollection.updateOne(
                    { email: user.email },
                    { $set: { ...profile, email: user.email } },
                    { upsert: true }
                );

                return true; 
            } catch (err) {
                console.error('Error during signIn callback:', err);
                return false; // Return false on error
            }
        },
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
