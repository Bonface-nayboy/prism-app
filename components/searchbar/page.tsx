"use client"; // This enables client-side rendering

import React, { useState } from 'react';
import { TextField, InputAdornment, Box } from '@mui/material';
import ProductsCard from '@/components/productsCard'; // Ensure this path is correct

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    return (
        <Box className="SearchPage" sx={{ padding: '20px' }}>
            <TextField
                variant="standard"
                size="small"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearch}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <span role="img" aria-label="search">🔍</span>
                        </InputAdornment>
                    ),
                }}
            />
            <ProductsCard searchTerm={searchTerm} />
        </Box>
    );
};

export default SearchPage;
