import { Box, Container, Grid, Typography } from "@mui/material";
import Cards from "./cards/Card";
import profilePic from "../../../../assets/images/community/profilepic.png";

const data = [
  {
    name: "Emily Smith",
    date: "May 30, 2024",
    rating: "4.8",
    review:
      "Pickup Pointe has completely revolutionized how I approach shopping. As a busy professional, I often struggled to find time to visit multiple stores to get everything I needed. However, with Pickup Pointe, I can access a diverse range of products from my favorite vendors all in one convenient online platform. From fresh produce to artisanal goods, Pickup Pointe has it all. What truly sets them apart is their commitment to quality and reliability.",
    img: profilePic,
  },
  {
    name: "Arlene McCoy",
    date: "May 28, 2024",
    rating: "5.0",
    review:
      "Pickup Pointe has become my favorite online shopping destination. Because I'm always on the lookout for high-quality products, and Pickup Pointe delivers on both fronts.",
    img: profilePic,
  },
  {
    name: "James Richardson",
    date: "May 30, 2024",
    rating: "4.8",
    review:
      "I've tried numerous online shopping platforms over the years, but none have impressed me as much as Pickup Pointe.",
    img: profilePic,
  },
  {
    name: "Michael Trever",
    date: "May 30, 2024",
    rating: "4.8",
    review:
      "Pickup Pointe has completely revolutionized how I approach shopping. As a busy professional, I often struggled to find time to visit multiple stores to get everything I needed. However, with Pickup Pointe, I can access a diverse range of products from my favorite vendors all in one convenient online platform. From fresh produce to artisanal goods, Pickup Pointe has it all. What truly sets them apart is their commitment to quality and reliability.",
    img: profilePic,
  },
];

const Cummunity = () => {
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          padding: {
            xs: "40px",
            md: "120px 0 0 0",
          },
        }}
      >
        <Box>
          <Box sx={{ textAlign: "center", marginBottom: "40px" }}>
            <Typography
              variant="h3"
              sx={{
                color: "#181818",
                fontSize: "40px",
                fontWeight: "600",
                lineHeight: "52px",
              }}
            >
              Words From Your Community{" "}
            </Typography>
          </Box>

          <Grid container spacing={2}>
            <Grid item md={4}>
              <Cards
                name={data[0].name}
                date={data[0].date}
                rating={data[0].rating}
                review={data[0].review}
                img={data[0].img}
              />
            </Grid>
            <Grid item md={4}>
              <Grid container spacing={2}>
                <Grid item md={12}>
                  <Cards
                    name={data[1].name}
                    date={data[1].date}
                    rating={data[1].rating}
                    review={data[1].review}
                    img={data[1].img}
                  />
                </Grid>
                <Grid item md={12}>
                  <Cards
                    name={data[2].name}
                    date={data[2].date}
                    rating={data[2].rating}
                    review={data[2].review}
                    img={data[2].img}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={4}>
              <Cards
                name={data[3].name}
                date={data[3].date}
                rating={data[3].rating}
                review={data[3].review}
                img={data[3].img}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Cummunity;
