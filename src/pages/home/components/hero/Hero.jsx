import { Box, Container, styled } from "@mui/material";
import React from "react";
import CustomBtn from "../../../components/button/CustomBtn";

const Hero = () => {
  return (
    <>
      <Container maxWidth="xl" sx={{ padding: "0" }}>
        <Box
          sx={{
            width: {
              xs: "100%",
              md: "70%",
            },
            margin: "auto",
            background: "#fff",
            padding: { xs: "42px 0", lg: "100px 0 64px" },
          }}
        >
          <FontSixteen>Get Quality. Get Local.</FontSixteen>
          <MainHeading>
            Pickup Pointe: Your Central Hub for Seamless Local Deliveries and
            Pickups
          </MainHeading>
          <Paragraph>
            At Pickup Pointe, we match-make local products to local buyers ❤️
          </Paragraph>
          <Box
            sx={{
              display: "flex",
              justifyContent: 'center',
              marginTop: {
                xs: '16px',
                md: '32px'
              }
            }}
          >
            <CustomBtn
              value={"Join the community"}
              size={"237px"}
              weight={600}
              bg={"rgba(241, 68, 69, 1)"}
              color={"#fff"}
            />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Hero;

const FontSixteen = styled("p")(({ theme }) => ({
  fontsize: "16px",
  fontWeight: "500",
  textAlign: "center",
  color: "rgba(241, 68, 69, 1)",
}));
const Paragraph = styled("p")(({ theme }) => ({
  fontsize: "18px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
  fontWeight: "400",
  textAlign: "center",
  color: "rgba(138, 138, 138, 1)",
}));

const MainHeading = styled("h1")(({ theme }) => ({
  fontSize: "48px",
  lineHeight: "62px",
  [theme.breakpoints.down("md")]: {
    fontSize: "24px",
    lineHeight: "32px",
  },
  fontWeight: "600",
  textAlign: "center",
  color: "rgba(24, 24, 24, 1)",
  margin: "12px 0",
}));
