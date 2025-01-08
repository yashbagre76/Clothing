import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  Container,
} from "@mui/material";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    console.log("Form Submitted:", formData);

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    // Reset submitted message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          backgroundColor: "#f5f5f5",
          padding: 4,
          borderRadius: 2,
          boxShadow: 2,
        }}
        noValidate
        autoComplete="off"
      >
        {/* Title */}
        <Typography
          variant="h4"
          component="h1"
          fontWeight="bold"
          textAlign="center"
          gutterBottom
        >
          Contact Us
        </Typography>

        {/* Success Message */}
        {submitted && (
          <Alert severity="success" sx={{ mb: 2 }}>
            Thank you! Your message has been sent successfully.
          </Alert>
        )}

        {/* Input Fields */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <TextField
            label="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            required
            variant="outlined"
            color="primary"
          />
          <TextField
            label="Your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
            type="email"
            variant="outlined"
            color="primary"
          />
          <TextField
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            fullWidth
            required
            variant="outlined"
            color="primary"
          />
          <TextField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            fullWidth
            required
            multiline
            rows={4}
            variant="outlined"
            color="primary"
          />
        </Box>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            mt: 3,
            py: 1.5,
            fontSize: "1rem",
            textTransform: "uppercase",
            fontWeight: "bold",
            ":hover": {
              backgroundColor: "darkblue",
            },
          }}
          fullWidth
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
}

export default ContactForm;
