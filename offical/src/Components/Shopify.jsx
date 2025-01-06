import React from "react";

function Shopify() {
  const products = [
    {
      id: 1,
      name: "High-offence-Hoodei",
      price: 1200,
      img: "/img/HOODIE-RED.jpg",
    },
    {
      id: 2,
      name: "Basic-Hoodei",
      price: 799,
      img: "/img/HOODEI-SILVER.jpg",
    },
    {
      id: 3,
      name: "Protect-Your-Self",
      price: 1198,
      img: "/img/HOODEI-BROWUN.jpg",
    },
    {
      id: 4,
      name: "High-offence-Hoodei",
      price: 1300,
      img: "/img/HOODEI-LT.jpg",
    },

    {
      id: 6,
      name: "Zipper-Hoodei",
      price: 1700,
      img: "/img/IMG_4378.webp",
    },
    {
      id: 5,
      name: "Zipper-Hoodei",
      price: 1700,
      img: "/img/blue.webp",
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h3 className="text-2xl font-bold mb-6">WINTER COLLECTION</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h5 className="text-lg font-semibold">{product.name}</h5>
              <p className="text-gray-500">Price: ${product.price}</p>
              <button className="mt-2 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shopify;
