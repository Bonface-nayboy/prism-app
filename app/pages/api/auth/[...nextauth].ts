import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

// Assert environment variables are defined
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const DATABASE_URL = process.env.DATABASE_URL;

if (!GOOGLE_CLIENT_ID) {
    throw new Error('Missing GOOGLE_CLIENT_ID in environment variables');
}
if (!GOOGLE_CLIENT_SECRET) {
    throw new Error('Missing GOOGLE_CLIENT_SECRET in environment variables');
}
if (!DATABASE_URL) {
    throw new Error('Missing DATABASE_URL in environment variables');
}

const authOptions = {
    providers: [
        GoogleProvider({
            clientId: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
        }),
    ],
    pages: {
        signIn: '/signinauth', // Custom sign-in page
        error: '/auth/error',   // Optional error page
    },
    database: DATABASE_URL,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
