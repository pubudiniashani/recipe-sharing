import React, { useState } from 'react';
import { Button, TextField, Container, Typography, Box, Paper } from '@mui/material';
import backgroundImage from "../assets/spaghetti.jpg";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {

        console.log('Email:', email, 'Password:', password);
    };

    return (
        <Container component="main"
                   maxWidth="xs" sx={{  backgroundImage: `url(${backgroundImage}`, backgroundSize: 'cover', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Paper elevation={3} sx={{ padding: 3 ,  width: 300,
                    height: 300, }}>
                <Typography variant="h5" align="center" gutterBottom>
                    Login
                </Typography>
                <form onSubmit={handleSubmit} >
                    <Box mb={2}>
                        <TextField
                            fullWidth
                            label="Email"
                            variant="outlined"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}

                        />
                    </Box>
                    <Box mb={3}>
                        <TextField
                            fullWidth
                            label="Password"
                            type="password"
                            variant="outlined"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}

                        />
                    </Box>
                    <Box display="flex" justifyContent="center" >
                        <Button variant="contained" color="primary" type="submit" fullWidth>
                            Log In
                        </Button>
                    </Box>
                </form>
            </Paper>
        </Container>
    );
};

export default LoginForm;
