"use client";
import { signIn, useSession } from 'next-auth/react';
import { Box, Button, Typography, Avatar } from '@mui/material';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const SignInAuth = () => {
    const router = useRouter();
    const { data: session } = useSession();

    const handleSignIn = async () => {
        try {
            const result = await signIn('google', { redirect: false });
            if (result?.error) {
                throw new Error(result.error);
            }
            router.push("/"); 
        } catch (error) {
            console.error("Sign in failed:", error);
            toast.error("Sign in failed!");
        }
    };

    useEffect(() => {
        if (session) {
            router.push("/"); 
            toast.success("Sign in successful!");
        }
    }, [session, router]);

    return (
        <Box textAlign="center" mt={5}>
            <Box>
                <Avatar
                    src="/path/to/google-logo.png" // Update this with the actual Google logo URL
                    alt="Google Logo"
                    sx={{ width: 30, height: 30 }} // Use sx for size
                />
                <Typography variant="h4">Sign In</Typography>
                <Button variant="contained" color="primary" onClick={handleSignIn}>
                    Sign in with Google
                </Button>
            </Box>
        </Box>
    );
};

export default SignInAuth;
