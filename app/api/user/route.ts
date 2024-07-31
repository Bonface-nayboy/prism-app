import { NextResponse } from "next/server";
import { connectMongoDb } from "../../lib/mongodb"; 
import User from '../../../src/models/userModel';

// Explicitly define the type of the request parameter
export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();

        const client = await connectMongoDb(); // Ensure MongoDB connection is established

        const database = client.db('register'); // Replace 'register' with your database name
        const usersCollection = database.collection('users');

        // Create a new user using the User model
        await usersCollection.insertOne({ email, password });

        return NextResponse.json({ message: "User registered" }, { status: 201 });
    } catch (error) {
        console.error('Error in POST /api/user:', error);
        return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
    }
}
