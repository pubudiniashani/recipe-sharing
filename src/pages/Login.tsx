
import { TextField, Button, Grid, Container, Typography } from '@mui/material';


const SignUp = () => {
    return (
        <Container maxWidth="xs" style={{ padding: '20px' }}>
            <Grid container spacing={2} direction="column" alignItems="center">

                <Grid item>
                    <img src="/fastfood.jpg" alt="Signup" style={{ width: '100%', maxWidth: '200px' }} />
                </Grid>


                <Grid item>
                    <Typography variant="h5" align="center" gutterBottom>
                       Login to your account
                    </Typography>
                    <form noValidate autoComplete="off">

                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Password"
                            variant="outlined"
                            fullWidth
                            type="password"
                            margin="normal"
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            type="submit"
                            style={{ marginTop: '20px' }}
                        >
                            Login
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
};

export default SignUp;
