import { Box, Button, Grid, Typography } from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import PropTypes from "prop-types";

const PricingCard = ({ listData, pricing }) => {
  return (
    <>
      <Grid item md={6}>
        <Box
          sx={{
            borderRadius: "16px",
            boxShadow: "0px 1px 4px 0px rgba(0, 0, 0, 0.04)",
            border: "2px solid #00000010",
            height: "100%",
            padding: "24px",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <Grid
            container
            spacing={0.5}
          >
            <Grid item md={5}>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "500",
                  lineHeight: "25.6px",
                  color: "#F14445",
                }}
              >
                {pricing.type}
              </Typography>
              <Typography
                sx={{
                  fontSize: "40px",
                  fontWeight: "600",
                  lineHeight: "52px",
                  color: "#181818",
                }}
              >
                {pricing.price}
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "25.6px",
                  color: "#8A8A8A",
                }}
              >
                {pricing.description}
              </Typography>
            </Grid>
            <Grid item md={1} display=" flex" justifyContent="center">
              <Box
                sx={{
                  display: {
                    xs: "none",
                    md: "block",
                  },
                  flexBasis: "1.5px",
                  backgroundColor: "#00000014",
                  height: "100%",
                  width: "1px",
                }}
              />
            </Grid>
            <Grid item md={6} display="flex" alignItems="end">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  gap: "7px",
                }}
              >
                {listData?.map((list, index) => (
                  <Box
                    key={index} // Added key here
                    sx={{
                      display: "flex",
                      gap: "0.4rem",
                      alignItems: "center",
                    }}
                  >
                    <CheckCircleRoundedIcon
                      sx={{
                        height: "1rem",
                        width: "1rem",
                        color:
                          pricing.type == "Shoppers"
                            ? "#8A8A8A"
                            : "#F14445",
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                        lineHeight: "1.8rem",
                      }}
                    >
                      {list}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ marginTop: "24px" }}>
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                border: "none",
                backgroundColor:
                  pricing.type === "Shoppers" ? "#F5F5F5" : "#F14445",
                color: pricing.type === "Shoppers" ? "black" : "white",
                padding: "8px 32px",
                "&:hover": {
                  backgroundColor:
                    pricing.type === "Shoppers" ? "#F5F5F5" : "#F14445",
                  color: pricing.type === "Shoppers" ? "black" : "white",
                },
              }}
            >
              {pricing.btn}
            </Button>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

PricingCard.propTypes = {
  listData: PropTypes.array.isRequired,
  pricing: PropTypes.object.isRequired,
};

export default PricingCard;
