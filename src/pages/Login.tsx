import { TextField, Button, Grid, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Login = () => {
    return (

            <Container
                maxWidth="xs"
                style={{
                    padding: "20px",
                    border: "2px solid #4a148c",
                    borderRadius: "18px",
                    backgroundColor: "#f3e5f5",
                }}
            >
                <Grid container spacing={2} direction="column" alignItems="center">
                    <Grid item>
                        <img
                            src="/fastfood.jpg"
                            alt="Signup"
                            style={{ width: "100%", maxWidth: "200px" ,  }}
                        />
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
                            <Link
                                to="/home"
                                color="primary"
                                className="bg-blue-500 text-white w-[100%] block rounded-xl py-2"
                            >
                                Login
                            </Link>
                        </form>
                    </Grid>
                </Grid>
            </Container>

    );
};

export default Login;
