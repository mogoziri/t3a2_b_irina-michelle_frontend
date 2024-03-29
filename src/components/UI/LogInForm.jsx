import React, { useState } from "react";
import {
  Box,
  Button,
  Alert,
  Link,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useAuth } from "../../Authentication/auth-provider";

//log in form, requires authentication with username and password. All fields are required to log in.
const LogInForm = () => {
  const { logIn, error } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    logIn({ username, password });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: 43,
          marginTop: 10,
        }}
      >
        <Typography variant="h6">Welcome Back! Login Here</Typography>

        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
          </Grid>

          {/* If not a registered user, can select below to be redirected to sign up and become a user*/}
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/signup" component={RouterLink} variant="body2">
                Or create a new account
              </Link>
            </Grid>
          </Grid>

          <Button
            type="register"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>

          {!!error && <Alert severity="error">{error}</Alert>}
        </Box>
      </Box>
    </Container>
  );
};

export default LogInForm;
