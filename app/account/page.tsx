// "use client";

// import { Avatar, Box, Button, Card, Dialog, DialogActions, DialogContent, DialogContentText, Grid, MenuItem, Select, TextField, Typography } from '@mui/material'
// import React, { useState } from 'react'
// import User from '../dashboard/page'

// export default function Account() {

//     const [open, setOpen] = useState(false);

//     const handleToOpen = () => {
//         setOpen(true)
//     }
//     const handleToClose = () => {
//         setOpen(false)
//     }

//     return (
//         <Box>
//             <User />
//             <Box sx={{ backgroundColor: 'dimgray' }}>
//                 <Box sx={{ margin: '2% 18%' }}>
//                     <Typography variant='h3' sx={{ textAlign: 'center', margin: '2%' }}>Account</Typography>
//                     <Box>
//                         <Card>
//                             <Avatar 
//                                 src='https://th.bing.com/th?id=OIP.DxdqBFLVLPcWsjkds8636QHaHf&w=248&h=251&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2' 
//                                 alt='' 
//                                 sx={{ marginLeft: '90%' }} 
//                                 component="img" // Add the required component prop
//                             />
//                             <Box sx={{ marginLeft: '2%' }}>
//                                 <Typography></Typography>
//                             </Box>
//                             <Box sx={{ margin: '2%', }}>
//                                 <Typography variant='h4'>Balance : $100</Typography>
//                             </Box>
//                             <Box sx={{ marginLeft: '2%', marginBottom: '3%' }}>
//                                 <Button variant='outlined' onClick={handleToOpen}>Deposit</Button>
//                             </Box>
//                             <Box>
//                                 <Box sx={{ marginLeft: '2%', marginBottom: '10%' }}>
//                                     <Button variant='outlined' onClick={handleToOpen}>Withdraw</Button>
//                                 </Box>
//                             </Box>
//                         </Card>
//                     </Box>
//                 </Box>
//             </Box>
//         </Box>
//     )
// }


"use client";

import { Avatar, Box, Button, Card, Dialog, DialogActions, DialogContent, DialogContentText, Typography } from '@mui/material';
import React, { useState } from 'react';
import User from '../dashboard/page';

export default function Account() {
    const [open, setOpen] = useState(false);

    const handleToOpen = () => setOpen(true);
    const handleToClose = () => setOpen(false);

    return (
        <Box>
            <User />
            <Box sx={{ backgroundColor: 'dimgray' }}>
                <Box sx={{ margin: '2% 18%' }}>
                    <Typography variant='h3' sx={{ textAlign: 'center', margin: '2%' }}>Account</Typography>
                    <Box>
                        <Card>
                            <Box sx={{ display: 'flex', justifyContent: 'center', padding: '2%' }}>
                                <Avatar 
                                    src='https://th.bing.com/th?id=OIP.DxdqBFLVLPcWsjkds8636QHaHf&w=248&h=251&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2' 
                                    alt='User Avatar' 
                                    sx={{ width: 100, height: 100 }}
                                />
                            </Box>
                            <Box sx={{ margin: '2%' }}>
                                <Typography variant='h4'>Balance : $100</Typography>
                            </Box>
                            <Box sx={{ margin: '2%' }}>
                                <Button variant='outlined' onClick={handleToOpen}>Deposit</Button>
                                <Button variant='outlined' onClick={handleToOpen} sx={{ marginLeft: '1%' }}>Withdraw</Button>
                            </Box>
                        </Card>
                    </Box>
                </Box>
            </Box>
            {/* Dialog Component for Deposit/Withdraw */}
            <Dialog open={open} onClose={handleToClose}>
                <DialogContent>
                    <DialogContentText>
                        {/* Dialog content goes here */}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleToClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
