import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import AuthService from "../services/AuthService";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {useNavigate} from 'react-router-dom';



const SignUpPage = () => {
    const defaultTheme = createTheme();
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [token, setToken] = useState("");


    const handleSubmit = async (event) => {
        try {
            console.log(username,email, password,phoneNumber);

            AuthService.register(username, email, password, phoneNumber).then((response) => {
                console.log(response.data);
                setToken(response.data.token);
                navigate('/');

            });
        } catch (error) {
            console.log(error);
            console.log("Sign up failed");
        }
    }
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "pink" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
        </Box>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            size="small"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            onChange={(event) => setUsername(event.target.value)}
          />
          <TextField
            margin="normal"
            size="small"
            required
            fullWidth
            id="email"
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            size="small"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <TextField
            margin="normal"
            size="small"
            required
            fullWidth
            id="phoneNumber"
            label="Phone Number"
            type="tel"
            name="phoneNumber"
            autoComplete="phoneNumber"
            autoFocus
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
          <Button fullWidth variant="contained" sx={{ mt: 1, mb: 2, background:"#6134ba" }} onClick={handleSubmit}>
            sign-up
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default SignUpPage;
