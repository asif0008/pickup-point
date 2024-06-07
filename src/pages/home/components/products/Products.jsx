import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import mapImage from "../../../../assets/images/products/block.png";
import scan from "../../../../assets/images/products/scan.png";
import smallscan from "../../../../assets/images/products/sm-scan.png";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import SearchIcon from "@mui/icons-material/Search";

const Products = () => {
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          padding: {
            xs: "0",
            md: "93.4px 0 0 0",
          },
        }}
      >
        <Box sx={{ marginBottom: "40px" }}>
          <Grid container columnSpacing={7} rowSpacing={2}>
            <Grid item md={6}>
              <Box
                sx={{
                  width: {
                    xs: "100%",
                    md: "90%",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: "25px",
                      md: "40px",
                    },
                    fontWeight: "600",
                    lineHeight: {
                      xs: "35px",
                      md: "52px",
                    },
                  }}
                >
                  Local products homegrown from your local community
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6}>
              <Box>
                <Typography>
                  Explore the top features of Pickup Pointe designed to enhance
                  your shopping experience. From tracking orders to finding
                  valuable vendors nearby and accessing comprehensive vendor
                  information, discover convenience like never before.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Grid container spacing={2}>
          <Grid item md={5}>
            <Box
              sx={{
                borderRadius: "16px",
                boxShadow: "0px 1px 4px 0px rgba(0, 0, 0, 0.04)",
                border: "2px solid #00000010",
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                padding: {
                  xs: "10px",
                  md: "24px",
                },
              }}
            >
              <SubHeading gutterBottom variant="h6" component="div">
                Check your orders anytime
              </SubHeading>
              <Box
                sx={{
                  width: {
                    xs: "100%",
                    md: "80%",
                  },
                }}
              >
                <Paragraph>
                  Monitor your orders effortlessly with Pickup Pointe. Stay
                  up-to-date in real-time, ensuring you are always informed
                  about your purchases.
                </Paragraph>
              </Box>
              <Card
                sx={{
                  marginTop: "32px",
                  flexGrow: '1',
                  borderRadius: '12px',
                  boxShadow: '0px 1px 5px 0px rgba(27, 26, 33, 0.1)',
                  padding: {
                    xs: "0",
                    md: "20px",
                  },
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      background: "#00000008",
                      padding: {
                        xs: "15px",
                        md: "27.32px",
                      },
                      borderRadius: "13.66px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Box sx={{ textAlign: "center" }}>
                      <Typography
                        sx={{
                          fontSize: "18px",
                          fontWeight: "500",
                          lineHeight: "25.5px",
                        }}
                        variant="h6"
                        component="div"
                      >
                        Search Your Order
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: {
                          xs: "center",
                          md: "center",
                        },
                        gap: "5px",
                      }}
                    >
                      <TextField
                        sx={{
                          width: "100%",
                          // Set the width to your desired size
                          "& .MuiInputBase-root": {
                            height: "30px", // Set the height to your desired size
                          },
                          "& .MuiOutlinedInput-input": {
                            padding: "10px", // Adjust padding to ensure text is not cut off
                          },
                        }}
                      />
                      <Box
                        sx={{
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "5px  ",
                          width: "35px",
                          height: "30px",
                          background: "#F14445",
                          borderRadius: "4.55px",
                          "&:hover": {
                            backgroundColor: "#F14445", // Set the background color on hover
                          },
                        }}
                      >
                        <SearchIcon
                          sx={{
                            color: "white",
                            fontSize: "25px",
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>
                  <Box sx={{ marginTop: "22.77px" }}>
                    <Button sx={{ color: "black" }}>
                      <ArrowBackIosIcon sx={{ fontSize: "10px" }} /> Back
                    </Button>

                    <Box
                      sx={{
                        border: "1px solid #A3A3A370",
                        padding: "6.83px 9.11px",
                        borderRadius: "6.83px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Paragraph
                          sx={{
                            fontSize: "10px",
                            color: "black",
                            lineHeight: "14.57px",
                          }}
                        >
                          Pickup Pointe Store #32322
                        </Paragraph>
                        <Paragraph
                          sx={{
                            fontSize: "10px",
                            color: "red",
                            lineHeight: "14.57px",
                          }}
                        >
                          Ready To Pick up
                        </Paragraph>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Paragraph
                          sx={{
                            fontSize: "10px",
                            lineHeight: "12.75px",
                          }}
                        >
                          7384 Hayward Way, Laguna CA, 93453
                        </Paragraph>
                        <Paragraph
                          sx={{
                            textAlign: "right",
                            fontSize: "10px",
                            color: "black",
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                            lineHeight: "12.75px",
                          }}
                        >
                          curbside/drive-thru eligible{" "}
                          <CheckCircleOutlineIcon
                            sx={{
                              fontSize: "10px",
                            }}
                          />
                        </Paragraph>
                      </Box>
                      <Box sx={{ 
                        margin: "6.83px 0",
                        borderTop: '0.5px solid rgba(0, 0, 0, 0.08)'
                        }}>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginTop: "15px",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          sx={{
                            width: {
                              xs: "100%",
                              md: "40%",
                            },
                          }}
                        >
                          <img src={smallscan} />
                          <Typography
                            sx={{
                              fontSize: "8px",
                              lineHeight: "12.75px",
                            }}
                          >
                            Scan QR code and confirm pickup name upon arrival to
                            the location.
                          </Typography>
                        </Box>
                        <img src={scan} />
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item md={7}>
            <Box
              sx={{
                borderRadius: "16px",
                boxShadow: "0px 1px 4px 0px rgba(0, 0, 0, 0.04)",
                border: "2px solid #00000010",
                padding: "14px",
                height: "100%",
              }}
            >
              <SubHeading gutterBottom variant="h6" component="div">
                Discover Nearby Vendors
              </SubHeading>
              <Box
                sx={{
                  width: {
                    xs: "100%",
                    md: "55%",
                  },
                }}
              >
                <Paragraph>
                  Find the best vendors nearby with Pickup Pointe location-based
                  search. Explore local treasures, making shopping a breeze.
                </Paragraph>
              </Box>
              <Box sx={{ marginTop: "26px" }}>
                <StyledImage src={mapImage} alt="img" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

const SubHeading = styled(Typography)(() => ({
  fontSize: "24px",
  fontWeight: "500",
  lineHeight: "33.6px",
  color: "#181818",
}));

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

export default Products;
