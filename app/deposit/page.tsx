// "use client";

// import { Box, Button, Card, Dialog, DialogActions, DialogContent, DialogContentText, Grid, MenuItem, Select, TextField, Typography } from '@mui/material';
// import React, { useState, useEffect, useCallback } from 'react';
// import User from '../dashboard/page';
// import GooglePayButton from '@google-pay/button-react';
// import { toast } from 'react-toastify';
// import { useRouter } from 'next/navigation';
// import Image from 'next/image'; // Import Next.js Image component

// export default function Deposit() {
//     const [open, setOpen] = useState(false);
//     const [depositType, setDepositType] = useState('Silver');
//     const [amount] = useState(300); // Fixed amount of 300
//     const [paymentMethod, setPaymentMethod] = useState('');
//     const router = useRouter();

//     const handleMpesaPayment = useCallback(() => {
//         console.log('Handling Mpesa payment...');
//         toast.success('You have successfully made a deposit');
//         router.push('/profile');
//     }, [router]);

//     useEffect(() => {
//         if (paymentMethod === 'GooglePay') {
//             // Automatically handle Google Pay payment
//         } else if (paymentMethod === 'Mpesa') {
//             handleMpesaPayment();
//         }
//     }, [paymentMethod, handleMpesaPayment]); // Include handleMpesaPayment

//     const handleOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };

//     return (
//         <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5', padding: '2rem' }}>
//             <User />

//             <Box sx={{ maxWidth: '801px', margin: 'auto', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: 3, padding: '2rem' }}>
//                 <Typography variant='h4' sx={{ textAlign: 'center', marginBottom: '2rem' }}>Deposit</Typography>
//                 <Card sx={{ padding: '2rem', marginBottom: '2rem', boxShadow: 1 }}>
//                     <Button
//                         variant='contained'
//                         color='primary'
//                         sx={{ marginBottom: '1rem' }}
//                         onClick={handleOpen}
//                     >
//                         Deposit
//                     </Button>
//                 </Card>
//                 <Dialog open={open} onClose={handleClose} fullWidth>
//                     <DialogContent>
//                         <DialogContentText sx={{ marginBottom: '1rem' }}>
//                             Enter the amount you wish to deposit:
//                         </DialogContentText>
//                         <Box component='form' noValidate autoComplete='off'>
//                             <Grid container spacing={2}>
//                                 <Grid item xs={12} md={6}>
//                                     <TextField
//                                         variant='outlined'
//                                         label='Amount'
//                                         fullWidth
//                                         type='number'
//                                         value={amount}
//                                         InputProps={{
//                                             readOnly: true,
//                                         }}
//                                     />
//                                 </Grid>
//                                 <Grid item xs={12} md={6}>
//                                     <Select
//                                         fullWidth
//                                         variant='outlined'
//                                         label='Select a deposit type'
//                                         value={depositType}
//                                         onChange={(event) => setDepositType(event.target.value)}
//                                     >
//                                         <MenuItem value='Silver'>Silver</MenuItem>
//                                     </Select>
//                                 </Grid>
//                                 <Grid item xs={12} md={6}>
//                                     <Select
//                                         fullWidth
//                                         variant='outlined'
//                                         label='Select a payment method'
//                                         value={paymentMethod}
//                                         onChange={(event) => setPaymentMethod(event.target.value)}
//                                     >
//                                         <MenuItem value='GooglePay'>Google Pay</MenuItem>
//                                         <MenuItem value='Mpesa'>Mpesa</MenuItem>
//                                     </Select>
//                                 </Grid>
//                             </Grid>
//                         </Box>
//                         {paymentMethod === 'GooglePay' && (
//                             <Box sx={{ marginTop: '2rem' }}>
//                                 <GooglePayButton
//                                     environment="TEST"
//                                     paymentRequest={{
//                                         apiVersion: 2,
//                                         apiVersionMinor: 0,
//                                         allowedPaymentMethods: [
//                                             {
//                                                 type: 'CARD',
//                                                 parameters: {
//                                                     allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
//                                                     allowedCardNetworks: ['MASTERCARD', 'VISA'],
//                                                 },
//                                                 tokenizationSpecification: {
//                                                     type: 'PAYMENT_GATEWAY',
//                                                     parameters: {
//                                                         gateway: 'example',
//                                                         gatewayMerchantId: 'exampleGatewayMerchantId',
//                                                     },
//                                                 },
//                                             },
//                                         ],
//                                         merchantInfo: {
//                                             merchantId: 'BCR2DN4T6XQ75TR3',
//                                             merchantName: 'prism',
//                                         },
//                                         transactionInfo: {
//                                             totalPriceStatus: 'FINAL',
//                                             totalPriceLabel: 'Total',
//                                             totalPrice: amount.toFixed(2),
//                                             currencyCode: 'KES',
//                                             countryCode: 'KE',
//                                         },
//                                     }}
//                                     onLoadPaymentData={(paymentData) => {
//                                         console.log('load payment data', paymentData);
//                                         toast.success('You have successfully made a deposit');
//                                         router.push('/profile');
//                                     }}
//                                 />
//                             </Box>
//                         )}
//                     </DialogContent>
//                     <DialogActions>
//                         <Button variant='contained' color='primary' onClick={handleClose}>OK</Button>
//                         <Button variant='outlined' color='error' onClick={handleClose}>Cancel</Button>
//                     </DialogActions>
//                 </Dialog>
//                 <Image 
//                     src='https://th.bing.com/th/id/OIP.htD-lWW4RIat5ViCMNfE1AEsDH?pid=ImgDet&w=185&h=123&c=7' 
//                     alt='iphone_url' 
//                     width={50} 
//                     height={50} 
//                 />
//             </Box>
//         </Box>
//     );
// }


// "use client";

// import { Box, Button, Card, Dialog, DialogActions, DialogContent, DialogContentText, Grid, MenuItem, Select, TextField, Typography } from '@mui/material';
// import React, { useState, useCallback, useEffect } from 'react';
// import User from '../dashboard/page';
// import GooglePayButton from '@google-pay/button-react';
// import { toast } from 'react-toastify';
// import { useRouter } from 'next/navigation';
// import Image from 'next/image'; // Import Next.js Image component
// import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';

// // PayPal client ID from environment variable
// const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

// export default function Deposit() {
//     const [open, setOpen] = useState(false);
//     const [depositType, setDepositType] = useState('Silver');
//     const [amount] = useState(300); // Fixed amount of 300
//     const [paymentMethod, setPaymentMethod] = useState('');
//     const router = useRouter();

//     const handleMpesaPayment = useCallback(() => {
//         console.log('Handling Mpesa payment...');
//         toast.success('You have successfully made a deposit');
//         router.push('/profile');
//     }, [router]);

//     useEffect(() => {
//         if (paymentMethod === 'GooglePay') {
//             // Automatically handle Google Pay payment
//         } else if (paymentMethod === 'Mpesa') {
//             handleMpesaPayment();
//         }
//     }, [paymentMethod, handleMpesaPayment]); // Include handleMpesaPayment

//     const handleOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };

//     return (
//         <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5', padding: '2rem' }}>
//             <User />

//             <Box sx={{ maxWidth: '801px', margin: 'auto', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: 3, padding: '2rem' }}>
//                 <Typography variant='h4' sx={{ textAlign: 'center', marginBottom: '2rem' }}>Deposit</Typography>
//                 <Card sx={{ padding: '2rem', marginBottom: '2rem', boxShadow: 1 }}>
//                     <Button
//                         variant='contained'
//                         color='primary'
//                         sx={{ marginBottom: '1rem' }}
//                         onClick={handleOpen}
//                     >
//                         Deposit
//                     </Button>
//                 </Card>
//                 <Dialog open={open} onClose={handleClose} fullWidth>
//                     <DialogContent>
//                         <DialogContentText sx={{ marginBottom: '1rem' }}>
//                             Enter the amount you wish to deposit:
//                         </DialogContentText>
//                         <Box component='form' noValidate autoComplete='off'>
//                             <Grid container spacing={2}>
//                                 <Grid item xs={12} md={6}>
//                                     <TextField
//                                         variant='outlined'
//                                         label='Amount'
//                                         fullWidth
//                                         type='number'
//                                         value={amount}
//                                         InputProps={{
//                                             readOnly: true,
//                                         }}
//                                     />
//                                 </Grid>
//                                 <Grid item xs={12} md={6}>
//                                     <Select
//                                         fullWidth
//                                         variant='outlined'
//                                         label='Select a deposit type'
//                                         value={depositType}
//                                         onChange={(event) => setDepositType(event.target.value)}
//                                     >
//                                         <MenuItem value='Silver'>Silver</MenuItem>
//                                     </Select>
//                                 </Grid>
//                                 <Grid item xs={12} md={6}>
//                                     <Select
//                                         fullWidth
//                                         variant='outlined'
//                                         label='Select a payment method'
//                                         value={paymentMethod}
//                                         onChange={(event) => setPaymentMethod(event.target.value)}
//                                     >
//                                         <MenuItem value='GooglePay'>Google Pay</MenuItem>
//                                         <MenuItem value='Paypal'>PayPal</MenuItem>
//                                         <MenuItem value='Mpesa'>Mpesa</MenuItem>
//                                     </Select>
//                                 </Grid>
//                             </Grid>
//                         </Box>
//                         {paymentMethod === 'GooglePay' && (
//                             <Box sx={{ marginTop: '2rem' }}>
//                                 <GooglePayButton
//                                     environment="TEST"
//                                     paymentRequest={{
//                                         apiVersion: 2,
//                                         apiVersionMinor: 0,
//                                         allowedPaymentMethods: [
//                                             {
//                                                 type: 'CARD',
//                                                 parameters: {
//                                                     allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
//                                                     allowedCardNetworks: ['MASTERCARD', 'VISA'],
//                                                 },
//                                                 tokenizationSpecification: {
//                                                     type: 'PAYMENT_GATEWAY',
//                                                     parameters: {
//                                                         gateway: 'example',
//                                                         gatewayMerchantId: 'exampleGatewayMerchantId',
//                                                     },
//                                                 },
//                                             },
//                                         ],
//                                         merchantInfo: {
//                                             merchantId: 'BCR2DN4T6XQ75TR3',
//                                             merchantName: 'prism',
//                                         },
//                                         transactionInfo: {
//                                             totalPriceStatus: 'FINAL',
//                                             totalPriceLabel: 'Total',
//                                             totalPrice: amount.toFixed(2),
//                                             currencyCode: 'KES',
//                                             countryCode: 'KE',
//                                         },
//                                     }}
//                                     onLoadPaymentData={(paymentData) => {
//                                         console.log('load payment data', paymentData);
//                                         toast.success('You have successfully made a deposit');
//                                         router.push('/profile');
//                                     }}
//                                 />
//                             </Box>
//                         )}
//                         {paymentMethod === 'Paypal' && PAYPAL_CLIENT_ID && (
//                             <PayPalScriptProvider options={{ "clientId": PAYPAL_CLIENT_ID }}>
//                                 <Box sx={{ marginTop: '2rem' }}>
//                                     <PayPalButtons
//                                         createOrder={(data, actions) => {
//                                             if (!actions.order) {
//                                                 throw new Error('PayPal actions.order is undefined');
//                                             }
//                                             return actions.order.create({
//                                                 intent: 'CAPTURE',
//                                                 purchase_units: [{
//                                                     amount: {
//                                                         currency_code: 'USD',
//                                                         value: amount.toFixed(2),
//                                                     }
//                                                 }],
//                                                 application_context: {
//                                                     shipping_preference: 'NO_SHIPPING'
//                                                 }
//                                             });
//                                         }}
//                                         onApprove={async (data, actions) => {
//                                             if (!actions.order) {
//                                                 throw new Error('PayPal actions.order is undefined');
//                                             }
//                                             return actions.order.capture().then((details) => {
//                                                 if (!details.payer?.name?.given_name) {
//                                                     throw new Error('PayPal details.payer is undefined');
//                                                 }
//                                                 console.log('Transaction completed by ' + details.payer.name.given_name);
//                                                 toast.success('You have successfully made a deposit');
//                                                 router.push('/profile');
//                                             });
//                                         }}
//                                         onError={(err) => {
//                                             console.error('PayPal Error:', err);
//                                             toast.error('An error occurred with PayPal payment');
//                                         }}
//                                     />
//                                 </Box>
//                             </PayPalScriptProvider>
//                         )}
//                     </DialogContent>
//                     <DialogActions>
//                         <Button variant='contained' color='primary' onClick={handleClose}>OK</Button>
//                         <Button variant='outlined' color='error' onClick={handleClose}>Cancel</Button>
//                     </DialogActions>
//                 </Dialog>
//                 <Image
//                     src='https://th.bing.com/th/id/OIP.htD-lWW4RIat5ViCMNfE1AEsDH?pid=ImgDet&w=185&h=123&c=7'
//                     alt='iphone_url'
//                     width={50}
//                     height={50}
//                 />
//             </Box>
//         </Box>
//     );
// }




// "use client";

// import { Box, Button, Card, Dialog, DialogActions, DialogContent, DialogContentText, Grid, MenuItem, Select, TextField, Typography } from '@mui/material';
// import React, { useState, useCallback, useEffect } from 'react';
// import User from '../dashboard/page';
// import GooglePayButton from '@google-pay/button-react';
// import { toast } from 'react-toastify';
// import { useRouter } from 'next/navigation';
// import Image from 'next/image'; // Import Next.js Image component
// import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';

// // PayPal client ID from environment variable
// const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

// export default function Deposit() {
//     const [open, setOpen] = useState(false);
//     const [depositType, setDepositType] = useState('Silver');
//     const [amount] = useState(30); // Amount in KES
//     const [paymentMethod, setPaymentMethod] = useState('');
//     const router = useRouter();

//     // Convert KES to USD
//     const amountInUSD = (amount / 130).toFixed(2); // Conversion rate: 300 KES = 2.33 USD

//     const handleMpesaPayment = useCallback(() => {
//         console.log('Handling Mpesa payment...');
//         toast.success('You have successfully made a deposit');
//         router.push('/profile');
//     }, [router]);

//     useEffect(() => {
//         if (paymentMethod === 'GooglePay') {
//             // Automatically handle Google Pay payment
//         } else if (paymentMethod === 'Mpesa') {
//             handleMpesaPayment();
//         }
//     }, [paymentMethod, handleMpesaPayment]); // Include handleMpesaPayment

//     const handleOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };

//     return (
//         <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5', padding: '2rem' }}>
//             <User />

//             <Box sx={{ maxWidth: '801px', margin: 'auto', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: 3, padding: '2rem' }}>
//                 <Typography variant='h4' sx={{ textAlign: 'center', marginBottom: '2rem' }}>Deposit</Typography>
//                 <Card sx={{ padding: '2rem', marginBottom: '2rem', boxShadow: 1 }}>
//                     <Button
//                         variant='contained'
//                         color='primary'
//                         sx={{ marginBottom: '1rem' }}
//                         onClick={handleOpen}
//                     >
//                         Deposit
//                     </Button>
//                 </Card>
//                 <Dialog open={open} onClose={handleClose} fullWidth>
//                     <DialogContent>
//                         <DialogContentText sx={{ marginBottom: '1rem' }}>
//                             Enter the amount you wish to deposit:
//                         </DialogContentText>
//                         <Box component='form' noValidate autoComplete='off'>
//                             <Grid container spacing={2}>
//                                 <Grid item xs={12} md={6}>
//                                     <TextField
//                                         variant='outlined'
//                                         label='Amount'
//                                         fullWidth
//                                         type='number'
//                                         value={amount}
//                                         InputProps={{
//                                             readOnly: true,
//                                         }}
//                                     />
//                                 </Grid>
//                                 <Grid item xs={12} md={6}>
//                                     <Select
//                                         fullWidth
//                                         variant='outlined'
//                                         label='Select a deposit type'
//                                         value={depositType}
//                                         onChange={(event) => setDepositType(event.target.value)}
//                                     >
//                                         <MenuItem value='Silver'>Silver</MenuItem>
//                                     </Select>
//                                 </Grid>
//                                 <Grid item xs={12} md={6}>
//                                     <Select
//                                         fullWidth
//                                         variant='outlined'
//                                         label='Select a payment method'
//                                         value={paymentMethod}
//                                         onChange={(event) => setPaymentMethod(event.target.value)}
//                                     >
//                                         <MenuItem value='GooglePay'>Google Pay</MenuItem>
//                                         <MenuItem value='Paypal'>PayPal</MenuItem>
//                                         <MenuItem value='Mpesa'>Mpesa</MenuItem>
//                                     </Select>
//                                 </Grid>
//                             </Grid>
//                         </Box>
//                         {paymentMethod === 'GooglePay' && (
//                             <Box sx={{ marginTop: '2rem' }}>
//                                 <GooglePayButton
//                                     environment="PRODUCTION" // Set to production environment
//                                     paymentRequest={{
//                                         apiVersion: 2,
//                                         apiVersionMinor: 0,
//                                         allowedPaymentMethods: [
//                                             {
//                                                 type: 'CARD',
//                                                 parameters: {
//                                                     allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
//                                                     allowedCardNetworks: ['MASTERCARD', 'VISA'],
//                                                 },
//                                                 tokenizationSpecification: {
//                                                     type: 'PAYMENT_GATEWAY',
//                                                     parameters: {
//                                                         gateway: 'example',
//                                                         gatewayMerchantId: 'exampleGatewayMerchantId',
//                                                     },
//                                                 },
//                                             },
//                                         ],
//                                         merchantInfo: {
//                                             merchantId: 'BCR2DN4T6XQ75TR3',
//                                             merchantName: 'prism',
//                                         },
//                                         transactionInfo: {
//                                             totalPriceStatus: 'FINAL',
//                                             totalPriceLabel: 'Total',
//                                             totalPrice: amount.toFixed(2),
//                                             currencyCode: 'KES',
//                                             countryCode: 'KE',
//                                         },
//                                     }}
//                                     onLoadPaymentData={(paymentData) => {
//                                         console.log('load payment data', paymentData);
//                                         toast.success('You have successfully made a deposit');
//                                         router.push('/profile');
//                                     }}
//                                 />
//                             </Box>
//                         )}
//                         {paymentMethod === 'Paypal' && PAYPAL_CLIENT_ID && (
//                             <PayPalScriptProvider options={{ "clientId": PAYPAL_CLIENT_ID, currency: 'USD' }}>
//                                 <Box sx={{ marginTop: '2rem' }}>
//                                     <PayPalButtons
//                                         createOrder={(data, actions) => {
//                                             if (!actions.order) {
//                                                 throw new Error('PayPal actions.order is undefined');
//                                             }
//                                             return actions.order.create({
//                                                 intent: 'CAPTURE',
//                                                 purchase_units: [{
//                                                     amount: {
//                                                         currency_code: 'USD',
//                                                         value: amountInUSD,
//                                                     }
//                                                 }],
//                                                 application_context: {
//                                                     shipping_preference: 'NO_SHIPPING'
//                                                 }
//                                             });
//                                         }}
//                                         onApprove={async (data, actions) => {
//                                             if (!actions.order) {
//                                                 throw new Error('PayPal actions.order is undefined');
//                                             }
//                                             return actions.order.capture().then((details) => {
//                                                 if (!details.payer?.name?.given_name) {
//                                                     throw new Error('PayPal details.payer is undefined');
//                                                 }
//                                                 console.log('Transaction completed by ' + details.payer.name.given_name);
//                                                 toast.success('You have successfully made a deposit');
//                                                 router.push('/profile');
//                                             });
//                                         }}
//                                         onError={(err) => {
//                                             console.error('PayPal Error:', err);
//                                             toast.error('An error occurred with PayPal payment');
//                                         }}
//                                     />
//                                 </Box>
//                             </PayPalScriptProvider>
//                         )}
//                     </DialogContent>
//                     <DialogActions>
//                         <Button variant='contained' color='primary' onClick={handleClose}>OK</Button>
//                         <Button variant='outlined' color='error' onClick={handleClose}>Cancel</Button>
//                     </DialogActions>
//                 </Dialog>
//                 <Image
//                     src='https://th.bing.com/th/id/OIP.htD-lWW4RIat5ViCMNfE1AEsDH?pid=ImgDet&w=185&h=123&c=7'
//                     alt='iphone_url'
//                     width={50}
//                     height={50}
//                 />
//             </Box>
//         </Box>
//     );
// }


"use client";

import {
  Box,
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography
} from "@mui/material";
import React, { useState, useCallback, useEffect } from "react";
import User from "../dashboard/page";
import GooglePayButton from "@google-pay/button-react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

// PayPal client ID from environment variable
const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
// const GOOGLE_PAY_GATEWAY_MERCHANT_ID =process.env.NEXT_PUBLIC_GOOGLE_PAY_GATEWAY_MERCHANT_ID;
const GOOGLE_PAY_GATEWAY_MERCHANT_ID = process.env.NEXT_PUBLIC_GOOGLE_PAY_GATEWAY_MERCHANT_ID || "";

export default function Deposit() {
  const [open, setOpen] = useState(false);
  const [depositType, setDepositType] = useState("Silver");
  const [amount] = useState(30); // Fixed amount of 300
  const [paymentMethod, setPaymentMethod] = useState("");
  const router = useRouter();

  const handleMpesaPayment = useCallback(() => {
    console.log("Handling Mpesa payment...");
    toast.success("You have successfully made a deposit");
    router.push("/profile");
  }, [router]);

  useEffect(() => {
    if (paymentMethod === "GooglePay") {
      // Automatically handle Google Pay payment
    } else if (paymentMethod === "Mpesa") {
      handleMpesaPayment();
    }
  }, [paymentMethod, handleMpesaPayment]); // Include handleMpesaPayment

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f5f5f5", padding: "2rem" }}>
      <User />

      <Box
        sx={{
          maxWidth: "801px",
          margin: "auto",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          boxShadow: 3,
          padding: "2rem"
        }}
      >
        <Typography
          variant="h4"
          sx={{ textAlign: "center", marginBottom: "2rem" }}
        >
          Deposit
        </Typography>
        <Card sx={{ padding: "2rem", marginBottom: "2rem", boxShadow: 1 }}>
          <Button
            variant="contained"
            color="primary"
            sx={{ marginBottom: "1rem" }}
            onClick={handleOpen}
          >
            Deposit
          </Button>
        </Card>
        <Dialog open={open} onClose={handleClose} fullWidth>
          <DialogContent>
            <DialogContentText sx={{ marginBottom: "1rem" }}>
              Enter the amount you wish to deposit:
            </DialogContentText>
            <Box component="form" noValidate autoComplete="off">
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    variant="outlined"
                    label="Amount"
                    fullWidth
                    type="number"
                    value={amount}
                    InputProps={{
                      readOnly: true
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Select
                    fullWidth
                    variant="outlined"
                    label="Select a deposit type"
                    value={depositType}
                    onChange={(event) => setDepositType(event.target.value)}
                  >
                    <MenuItem value="Silver">Silver</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Select
                    fullWidth
                    variant="outlined"
                    label="Select a payment method"
                    value={paymentMethod}
                    onChange={(event) => setPaymentMethod(event.target.value)}
                  >
                    <MenuItem value="GooglePay">Google Pay</MenuItem>
                    <MenuItem value="Paypal">PayPal</MenuItem>
                    <MenuItem value="Mpesa">Mpesa</MenuItem>
                  </Select>
                </Grid>
              </Grid>
            </Box>
            {paymentMethod === "GooglePay" && (
              <Box sx={{ marginTop: "2rem" }}>
                <GooglePayButton
                  environment={
                    process.env.NODE_ENV === "production" ? "PRODUCTION" : "TEST"
                  }
                  paymentRequest={{
                    apiVersion: 2,
                    apiVersionMinor: 0,
                    allowedPaymentMethods: [
                      {
                        type: "CARD",
                        parameters: {
                          allowedAuthMethods: [
                            "PAN_ONLY",
                            "CRYPTOGRAM_3DS"
                          ],
                          allowedCardNetworks: ["MASTERCARD", "VISA"]
                        },
                        tokenizationSpecification: {
                          type: "PAYMENT_GATEWAY",
                          parameters: {
                            gateway: "paypal",
                            gatewayMerchantId: GOOGLE_PAY_GATEWAY_MERCHANT_ID // PayPal Merchant ID
                          }
                        }
                      }
                    ],
                    merchantInfo: {
                      merchantId: "BCR2DN4T6XQ75TR3",
                      merchantName: "prism"
                    },
                    transactionInfo: {
                      totalPriceStatus: "FINAL",
                      totalPriceLabel: "Total",
                      totalPrice: amount.toFixed(2),
                      currencyCode: "KES",
                      countryCode: "KE"
                    }
                  }}
                  onLoadPaymentData={(paymentData) => {
                    console.log("load payment data", paymentData);
                    toast.success("You have successfully made a deposit");
                    router.push("/profile");
                  }}
                />
              </Box>
            )}
            {paymentMethod === "Paypal" && PAYPAL_CLIENT_ID && (
              <PayPalScriptProvider
                options={{ clientId: PAYPAL_CLIENT_ID }}
              >
                <Box sx={{ marginTop: "2rem" }}>
                  <PayPalButtons
                    createOrder={(data, actions) => {
                      if (!actions.order) {
                        throw new Error("PayPal actions.order is undefined");
                      }
                      return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                          {
                            amount: {
                              currency_code: "USD",
                              value: amount.toFixed(2)
                            }
                          }
                        ],
                        application_context: {
                          shipping_preference: "NO_SHIPPING"
                        }
                      });
                    }}
                    onApprove={async (data, actions) => {
                      if (!actions.order) {
                        throw new Error("PayPal actions.order is undefined");
                      }
                      return actions.order.capture().then((details) => {
                        if (!details.payer?.name?.given_name) {
                          throw new Error("PayPal details.payer is undefined");
                        }
                        console.log(
                          "Transaction completed by " +
                            details.payer.name.given_name
                        );
                        toast.success("You have successfully made a deposit");
                        router.push("/profile");
                      });
                    }}
                    onError={(err) => {
                      console.error("PayPal Error:", err);
                      toast.error("An error occurred with PayPal payment");
                    }}
                  />
                </Box>
              </PayPalScriptProvider>
            )}
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              color="primary"
              onClick={handleClose}
            >
              OK
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={handleClose}
            >
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
        <Image
          src="https://th.bing.com/th/id/OIP.htD-lWW4RIat5ViCMNfE1AEsDH?pid=ImgDet&w=185&h=123&c=7"
          alt="iphone_url"
          width={50}
          height={50}
        />
      </Box>
    </Box>
  );
}
