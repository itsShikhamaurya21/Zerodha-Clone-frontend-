import HomePage from "../Home/HomePage";
import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Card,
  CardMedia,
  Grid
} from "@mui/material";
import { useNavigate } from "react-router-dom"; // 🔹 import navigation hook

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // 🔹 create navigate function

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", { username, email, password });
    // alert("Form submitted"); // ❌ remove alert
    navigate("/"); // 🔹 redirect to HomePage route
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Card sx={{ borderRadius: 4, overflow: "hidden", boxShadow: 3 }}>
        <Grid container>
          {/* Form Section */}
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 4 }}>
              <Typography variant="h4" align="center" gutterBottom>
                Sign Up
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Username"
                  fullWidth
                  margin="normal"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <TextField
                  label="Email"
                  type="email"
                  fullWidth
                  margin="normal"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <TextField
                  label="Password"
                  type="password"
                  fullWidth
                  margin="normal"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  Register
                </Button>
              </form>
            </Box>
          </Grid>

          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              image="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
              alt="Signup"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                maxHeight: { xs: 300, md: "100%" }
              }}
            />
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}

export default SignUp;
