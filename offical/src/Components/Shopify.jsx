import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Container,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Shopify() {
  const products = [
    {
      id: 1,
      name: "High-offence Hoodie",
      price: 1200,
      img: "/img/HOODIE-RED.jpg",
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
      name: "High-offence Hoodie",
      price: 1300,
      img: "/img/HOODEI-LT.jpg",
    },
    {
      id: 5,
      name: "Zipper Hoodie",
      price: 1700,
      img: "/img/IMG_4378.webp",
    },
    {
      id: 6,
      name: "Zipper Hoodie",
      price: 1700,
      img: "/public/img/blue.webp",
    },
  ];

  return (
    <Container sx={{ py: 6 }}>
      <Typography
        variant="h4"
        component="h3"
        gutterBottom
        fontWeight="bold"
        textAlign="center"
        sx={{ color: "purple", textTransform: "uppercase", letterSpacing: 2 }}
      >
        Winter Collection
      </Typography>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card
              sx={{
                maxWidth: 345,
                borderRadius: 2,
                boxShadow: 3,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 8,
                },
                position: "relative",
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={product.img}
                alt={product.name}
                sx={{
                  borderRadius: "8px 8px 0 0",
                  "&:hover": {
                    opacity: 0.9,
                  },
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  backgroundColor: "rgba(0,0,0,0.7)",
                  borderRadius: "50%",
                  color: "white",
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "red",
                  },
                }}
              >
                <FavoriteIcon />
              </Box>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  fontWeight="bold"
                  sx={{
                    textAlign: "center",
                    textTransform: "capitalize",
                    color: "#333",
                  }}
                >
                  {product.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  textAlign="center"
                >
                  Price: ${product.price}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 2,
                    mt: 2,
                  }}
                >
                  <Button
                    variant="outlined"
                    color="primary"
                    startIcon={<ShoppingCartIcon />}
                    sx={{
                      textTransform: "capitalize",
                      "&:hover": { backgroundColor: "#f0f0f0" },
                    }}
                  >
                    Add to Cart
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{
                      backgroundColor: "purple",
                      textTransform: "capitalize",
                      "&:hover": { backgroundColor: "darkviolet" },
                    }}
                  >
                    Buy Now
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Shopify;
