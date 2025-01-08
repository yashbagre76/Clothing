import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Container,
} from "@mui/material";

function Arrival() {
  const products = [
    {
      id: 1,
      name: "High-Offense Hoodie",
      price: 1200,
      img: "/img/t-shirt.webp",
    },
    {
      id: 2,
      name: "Basic Hoodie",
      price: 799,
      img: "/img/HOODEI-SILVER.jpg",
    },
    {
      id: 3,
      name: "Protect Yourself",
      price: 1198,
      img: "/img/HOODEI-BROWUN.jpg",
    },
    {
      id: 4,
      name: "Light Hoodie",
      price: 1300,
      img: "/img/HOODEI-LT.jpg",
    },
    {
      id: 5,
      name: "Zipper Hoodie - Blue",
      price: 1700,
      img: "/img/blue.webp",
    },
    {
      id: 6,
      name: "Zipper Hoodie",
      price: 1700,
      img: "/img/IMG_4378.webp",
    },
    {
      id: 7,
      name: "Winter Jacket",
      price: 2500,
      img: "/img/jacket.jpg",
    },
    {
      id: 8,
      name: "Casual Hoodie",
      price: 999,
      img: "/img/casual-hoodie.jpg",
    },
  ];

  return (
    <Container sx={{ mt: 6 }}>
      <Typography
        variant="h4"
        component="h1"
        align="center"
        gutterBottom
        fontWeight="bold"
      >
        New Exclusive
      </Typography>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <Card
              sx={{
                maxWidth: 345,
                overflow: "hidden",
                position: "relative",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                  boxShadow: 8,
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={product.img}
                alt={product.name}
                sx={{
                  transition: "transform 0.5s ease",
                  "&:hover": {
                    transform: "scale(1.2) rotate(2deg)",
                  },
                }}
              />
              <CardContent
                sx={{
                  textAlign: "center",
                  background: "linear-gradient(135deg, #ff7eb3, #ff758c)",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                <Typography variant="h6" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="inherit">
                  Price: ₹{product.price}
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  justifyContent: "center",
                  animation: "pulse 1.5s infinite",
                  "@keyframes pulse": {
                    "0%": { transform: "scale(1)" },
                    "50%": { transform: "scale(1.05)" },
                    "100%": { transform: "scale(1)" },
                  },
                }}
              >
                <Button
                  size="medium"
                  variant="contained"
                  sx={{
                    backgroundColor: "darkblue",
                    color: "white",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: "navy",
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  Buy Now
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Arrival;
