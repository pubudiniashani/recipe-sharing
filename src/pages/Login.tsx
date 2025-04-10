import {
    Box,
    Typography,
    TextField,
    Button,
    Stack,
    Divider,
    useTheme,
    Paper,
    Link,
} from "@mui/material";

import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    return (
        <>

            <Box
                sx={{
                    minHeight: "100vh",
                    backgroundImage: `url(')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    p: 2,
                }}
            >
                <Paper
                    elevation={6}
                    sx={{
                        maxWidth: 400,
                        width: "100%",
                        p: 4,
                        borderRadius: 4,
                        backgroundColor: mode === "dark" ? "#1e1e1e" : "#fff",
                    }}
                >
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        align="center"
                        gutterBottom
                        sx={{ color: mode === "dark" ? "#f06292" : "#d81b60" }}
                    >
                        Welcome Back
                    </Typography>

                    <Stack spacing={2} component="form">
                        <TextField
                            label="Email"
                            name="email"
                            type="email"
                            fullWidth
                            required
                        />
                        <TextField
                            label="Password"
                            name="password"
                            type="password"
                            fullWidth
                            required
                        />

                        <Link
                            href="#"
                            underline="hover"
                            sx={{
                                fontSize: "0.875rem",
                                color: mode === "dark" ? "#f06292" : "#d81b60",
                                textAlign: "right",
                            }}
                        >
                            Forgot Password?
                        </Link>

                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            onClick={() => navigate("/home")}
                            sx={{
                                backgroundColor: mode === "dark" ? "#f06292" : "#d81b60",
                                color: "#fff",
                                textTransform: "none",
                                borderRadius: "20px",
                                fontWeight: "bold",
                                "&:hover": {
                                    backgroundColor: mode === "dark" ? "#ec407a" : "#c2185b",
                                },
                            }}
                        >
                            Login
                        </Button>
                    </Stack>

                    <Divider sx={{ my: 3, color: "gray" }}>or login with</Divider>

                    <Stack spacing={2}>
                        <Button
                            variant="outlined"
                            fullWidth
                            startIcon={<GoogleIcon />}
                            sx={{
                                textTransform: "none",
                                borderColor: "#f06292",
                                color: mode === "dark" ? "#f06292" : "#d81b60",
                            }}
                        >
                            Login with Google
                        </Button>
                        <Button
                            variant="outlined"
                            fullWidth
                            startIcon={<FacebookIcon />}
                            sx={{
                                textTransform: "none",
                                borderColor: "#f06292",
                                color: mode === "dark" ? "#f06292" : "#d81b60",
                            }}
                        >
                            Login with Facebook
                        </Button>
                    </Stack>

                    <Typography
                        variant="body2"
                        align="center"
                        sx={{ mt: 3, color: mode === "dark" ? "#aaa" : "#666" }}
                    >
                        Don't have an account?{" "}
                        <span style={{ color: "#f06292", cursor: "pointer" }}>Sign Up</span>
                    </Typography>
                </Paper>
            </Box>
        </>
    );
};

export default Login;

