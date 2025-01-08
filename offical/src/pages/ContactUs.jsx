import React from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Link,
} from "@mui/material";

function ContactUs() {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 6,
      }}
    >
      <Container maxWidth="md">
        {/* Title */}
        <Typography
          variant="h3"
          fontWeight="bold"
          textAlign="center"
          gutterBottom
        >
          Contact Us
        </Typography>

        {/* Content */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="body1" paragraph>
            <strong>WE LOVE TO HEAR FROM YOU & INTERACT WITH YOU.</strong>
          </Typography>
          <Typography variant="body1" paragraph>
            Our dedication to serving you extends beyond the last stitch of
            fabric to ensure every interaction with us is seamless and
            personalized. We're here to listen, assist, and elevate your
            shopping experience to new heights.
          </Typography>
          <Typography variant="body1" paragraph>
            Need assistance or have any feedback, review, or ideas of
            inspiration to share? We're just a message away. Reach out to us on{" "}
            <Link
              href="https://wa.me/917777019901"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
              underline="hover"
            >
              WhatsApp at +91 7777019901
            </Link>{" "}
            or email us at{" "}
            <Link
              href="mailto:help.allstag@gmail.com"
              color="primary"
              underline="hover"
            >
              help.allstag@gmail.com
            </Link>
            .
          </Typography>
          <Typography variant="body1" paragraph>
            Join us on this journey, where your input shapes our innovation, and
            together, we step beyond the conventional to create something
            extraordinary.
          </Typography>
        </Box>

        {/* Contact Form */}
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            backgroundColor: "#1e1e1e",
            padding: 4,
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
          }}
          noValidate
          autoComplete="off"
        >
          <Typography variant="h5" fontWeight="bold" textAlign="center">
            Send Us a Message
          </Typography>
          <TextField
            fullWidth
            label="Your Name"
            variant="outlined"
            color="primary"
            InputLabelProps={{
              style: { color: "white" },
            }}
            sx={{
              input: { color: "white" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "gray",
                },
                "&:hover fieldset": {
                  borderColor: "blue",
                },
              },
            }}
          />
          <TextField
            fullWidth
            label="Your Email"
            type="email"
            variant="outlined"
            color="primary"
            InputLabelProps={{
              style: { color: "white" },
            }}
            sx={{
              input: { color: "white" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "gray",
                },
                "&:hover fieldset": {
                  borderColor: "blue",
                },
              },
            }}
          />
          <TextField
            fullWidth
            label="Your Message"
            multiline
            rows={4}
            variant="outlined"
            color="primary"
            InputLabelProps={{
              style: { color: "white" },
            }}
            sx={{
              textarea: { color: "white" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "gray",
                },
                "&:hover fieldset": {
                  borderColor: "blue",
                },
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              alignSelf: "center",
              textTransform: "uppercase",
              px: 4,
              py: 1,
              borderRadius: "24px",
              "&:hover": {
                backgroundColor: "darkviolet",
              },
            }}
          >
            Submit
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default ContactUs;
