import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
        py: 4,
        mt: 4,
      }}
      component="footer"
    >
      <Container maxWidth="lg">
        {/* Footer Navigation */}
        <Grid container spacing={3} justifyContent="center" textAlign="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Quick Links
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 2,
                flexWrap: "wrap",
              }}
            >
              <Link
                href="#"
                color="inherit"
                underline="hover"
                sx={{ fontSize: "0.9rem" }}
              >
                About Us
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="hover"
                sx={{ fontSize: "0.9rem" }}
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="hover"
                sx={{ fontSize: "0.9rem" }}
              >
                Terms & Conditions
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="hover"
                sx={{ fontSize: "0.9rem" }}
              >
                Contact Us
              </Link>
            </Box>
          </Grid>

          {/* Social Media Links */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Follow Us
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              <IconButton
                href="#"
                sx={{
                  color: "white",
                  "&:hover": { color: "#4267B2" }, // Facebook Blue
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                href="#"
                sx={{
                  color: "white",
                  "&:hover": { color: "#1DA1F2" }, // Twitter Blue
                }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                href="#"
                sx={{
                  color: "white",
                  "&:hover": { color: "#E1306C" }, // Instagram Pink
                }}
              >
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright Section */}
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Typography variant="body2" color="gray">
            © {new Date().getFullYear()} Your Company Name. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
