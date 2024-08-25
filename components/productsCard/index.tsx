import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';
import { WhatsApp } from '@mui/icons-material';

// Define the product type
interface Product {
    id: string;
    name: string;
    image: string;
}

// Define the props that ProductsCard will receive
interface ProductsCardProps {
    searchTerm: string;
}

// Sample product data
const products: Product[] = [
    { id: "1", name: "Bulb", image: "https://images.pexels.com/photos/24561249/pexels-photo-24561249/free-photo-of-led-light-bulbs.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: "2", name: "Lamp", image: "https://images.pexels.com/photos/542619/pexels-photo-542619.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: "3", name: "LED Light", image: "https://images.pexels.com/photos/7425343/pexels-photo-7425343.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: "4", name: "Charger", image: "https://images.pexels.com/photos/2777507/pexels-photo-2777507.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
    { id: "5", name: "Capacitor", image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: "6", name: "Ammeter", image: "https://media.istockphoto.com/id/931173784/photo/electric-meters-in-a-row-standing-on-the-wall.jpg?b=1&s=612x612&w=0&k=20&c=3iZqzAfmKdauq8FLBhm3SS-F3zY9fe-eoBxVeK1VRZM=" }
];

const ProductsCard: React.FC<ProductsCardProps> = ({ searchTerm }) => {
    // Filter products based on search term
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    console.log("Filtered Products:", filteredProducts); // Log filtered products

    return (
        <Grid container spacing={2}>
            {filteredProducts.length === 0 ? (
                <Typography variant="h6" sx={{ width: '100%', textAlign: 'center' }}>
                    No products found
                </Typography>
            ) : (
                filteredProducts.map(prod => (
                    <Grid item xs={12} sm={6} md={4} key={prod.id}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 260, padding: '20px' }}
                                image={prod.image}
                                title={prod.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {prod.name}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    variant="contained"
                                    size="small"
                                    startIcon={<WhatsApp />}
                                    sx={{ backgroundColor: "green" }}
                                    href={`https://wa.me/+254717848448?text=Hi,+I+would+like+to+order+${encodeURIComponent(prod.name)}.`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Order
                                </Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))
            )}
        </Grid>
    );
};

export default ProductsCard;
