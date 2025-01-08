import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

function MainContent() {
  return (
    <Box
      sx={{
        maxWidth: "1200px",
        margin: "0 auto",
        textAlign: "center",
        mt: 4,
        p: 2,
      }}
    >
      {/* Featured Image Section */}
      <Card
        sx={{
          borderRadius: "16px",
          border: "2px solid purple",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "scale(1.02)",
            boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
          },
        }}
      >
        <CardMedia
          component="img"
          image="/img/DSC_4938.webp"
          alt="Main Content"
          sx={{
            width: "100%",
            borderRadius: "16px 16px 0 0",
          }}
        />
        <CardContent>
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ color: "purple", mb: 2 }}
          >
            Exclusive Winter Collection
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Explore our latest collection of premium winter wear. Stylish,
            comfortable, and perfect for the season.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "purple",
              textTransform: "uppercase",
              px: 4,
              py: 1.5,
              borderRadius: "24px",
              "&:hover": {
                backgroundColor: "darkviolet",
              },
            }}
            href="#shop-now"
          >
            Shop Now
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default MainContent;
