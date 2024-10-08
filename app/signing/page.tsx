"use client";

import { signIn } from "next-auth/react";
import { Box, Button, Typography } from '@mui/material';
import { toast } from "react-toastify";
import Image from "next/image";

export default function SignInbttn() {
    return (
        <Box textAlign="center" mt={5}>
            <button onClick={() => signIn('google')} className="flex items-center gap-4 shadow-xl rounded-lg pl-3">
                <Image src="/google-logo.png" height={30} width={30} alt="Google Logo" />
                <span className="bg-blue-500 text-white px-4 py-3">
                    Sign in with Google
                </span>
            </button>
        </Box>
    );
}
