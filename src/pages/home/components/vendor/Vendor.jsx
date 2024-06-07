import { Box, Container, Grid, Typography, styled } from "@mui/material";
import vendor from "../../../../assets/images/vendor/vendor.png";

const Vendor = () => {
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          padding: {
            xs: "0",
            md: "24px 0 0 0",
          },
        }}
      >
        <Box
          sx={{
            marginTop: "15px",
            borderRadius: "16px",
            boxShadow: "0px 1px 4px 0px rgba(0, 0, 0, 0.04)",
            border: "2px solid #00000010",
            padding: "24px",
          }}
        >
          <Grid container spacing={2}>
            <Grid
              item
              md={4}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="start"
            >
              <Typography sx={{ fontSize: "24px" }}>
                Comprehensive Vendor Insights
              </Typography>

              <Paragraph>
                Get all the information you need about our vendors at a glance.
                From product offerings to pricing and customer reviews.
              </Paragraph>
            </Grid>

            <Grid item md={8}>
              <Box>
                <StyledImage src={vendor} alt="vendor" />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

const Paragraph = styled(Typography)(() => ({
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "25.6px",
  color: "#8A8A8A",
}));
const StyledImage = styled("img")({
  width: "100%",
  maxWidth: "100%",
});

export default Vendor;
