"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Box, Typography, Avatar } from '@mui/material';

const UserInfo = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push('/'); 
    }
  }, [session, router]);

  if (!session) return <Typography>Please login for you to access our page</Typography>;

  // Use a default image if session.user?.image is not available
  const avatarSrc = session.user?.image || '/path/to/default-avatar.png'; // Set a valid path to the default image
  const userName = session.user?.name || 'User'; // Fallback for user name

  return (
    <Box sx={{ display: "inline-flex" }}>
      <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', margin: 1 }}>
        Welcome, {userName}
        <Avatar
          alt={userName} // Use fallback name
          src={avatarSrc}
          sx={{ width: 25, height: 25, marginLeft: 0 }}
        />
      </Typography>
    
      {/* Uncomment if sign out/sign in buttons are needed */}
      {/* <Button onClick={() => signOut()}>Sign out</Button>
      <Button onClick={() => signIn('google')}>Sign in</Button> */}
    </Box>
  );
};

export default UserInfo;
