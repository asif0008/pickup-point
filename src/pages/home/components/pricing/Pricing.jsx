import { Box, Container, Grid, Typography } from "@mui/material";
import PricingCard from "./components/PricingCard";

const data = [
  {
    type: "Shoppers",
    price: "Free",
    description:
      "Browse local vendors, select products and experience the convenience of having everything you need in one place.",
    btn: "Start shopping local",
    listData: [
      "Exclusive deals & discounts",
      "Advanced search options",
      "Ad-free browsing",
      "Priority customer support",
    ],
  },
  {
    type: "Vendors",
    price: "$50",
    description:
      "Vendors can start as low as $50 a month to try out our services. Grow your business with us and we'll help you scale as needed.",
    btn: "Become a Vendor",
    listData: [
      "Pickup pointe locations",
      "Inventory management",
      "Order scheduling insights",
      "Business branded POS",
      "Pickup/Delivery notifications",
      "Centralized shelf storage space",
    ],
  },
];

const Pricing = () => {
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          padding: {
            xs: "30px",
            md: "120px 0 ",
          },
        }}
      >
        <Box>
          <Box
            sx={{
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: "#181818",
                fontSize: "40px",
                fontWeight: "600",
                lineHeight: "52px",
              }}
            >
              Simple, Transparent Pricing
            </Typography>
            <Box
              sx={{
                margin: "0 auto",
                width: {
                  xs: "100%",
                  md: "57%",
                },
              }}
            >
              <Typography
                sx={{
                  color: "#8A8A8A",
                  fontSize: "18px",
                  fontWeight: "400",
                  lineHeight: "28.8px",
                }}
              >
                Local shoppers enjoy free access to Pickup Pointe. Local vendors
                benefit from affordable pricing and flexible options to scale
                with their business needs effortlessly.
              </Typography>
            </Box>
          </Box>

          <Grid container spacing={2}>
            {data?.map((pricing, index) => (
              <PricingCard
                key={index} // Added key here
                listData={pricing.listData}
                pricing={pricing}
              />
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Pricing;
