"use client"; // This enables client-side rendering

import React from 'react';
import { Box, Card, CardMedia, Typography } from '@mui/material';
import SearchPage from '@/components/searchbar/page'; 

const HomePage = () => {
    return (
        <Box>
            <Card>
                <CardMedia
                    component="img"
                    sx={{ height: { xs: 150, sm: 150 } }}
                    image="https://images.pexels.com/photos/301792/pexels-photo-301792.jpeg?auto=compress&cs=tinysrgb&w=600"
                    title="Electronic Products"
                />
                <Box
                    sx={{
                        position: 'absolute',
                        top: '5.5%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: 'white',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: { xs: '1.2rem', sm: '1.5rem' },
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        padding: '10px',
                        borderRadius: '8px',
                    }}
                >
                    <Typography variant='h5'>
                        PC El<span style={{ color: 'orange' }}>e</span>ctr<span style={{ color: 'blue' }}>i</span>c<span style={{ color: 'green' }}>a</span>ls
                    </Typography>
                </Box>
                <SearchPage />
            </Card>
            <Box sx={{ padding: '20px' }}>
                {/* Placeholder for potential additional content or components */}
            </Box>
        </Box>
    );
};

export default HomePage;
