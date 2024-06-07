import React, { useReducer } from "react";
import {
  Box,
  Container,
  Grid,
  styled,
  Tab,
  Tabs,
  Typography,
  Button,
} from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from "@mui/lab";
import { stepReducer, initialState } from "../../../../reducers/stepReducer";
import images from "./images";
import CustomBtn from "../../../components/button/CustomBtn";



const steps = {
  shopper: [
    {
      heading: "Register your account",
      paragraph:
        "Sign up for a Pickup Pointe account to unlock exclusive access to a world of convenience.",
    },
    { heading: "Choose vendor", paragraph: "Browse through our curated selection of trusted vendors to find perfect products for your needs." },
    { heading: "Select products", paragraph: "Explore each vendor's product offerings and select your desired products with just a few clicks." },
    { heading: "Make order", paragraph: "Once you've selected all your desired products, proceed to checkout to finalize your order. " },
  ],
  vendor: [
    { heading: "Register your account", paragraph: "Join our platform to start reaching new customers and growing your business." },
    { heading: "List your products", paragraph: "Set up your drop-off locations and schedules to ensure seamless product delivery." },
    { heading: "Manage orders", paragraph: "Use our intuitive tools to add, update, and organize your product listings." },
    { heading: "Receive payments", paragraph: "Monitor incoming orders and plan your deliveries effectively to ensure timely fulfillment." },
  ],
};

const Works = () => {
  const [state, dispatch] = useReducer(stepReducer, initialState);

  const handleNext = () => {
    const nextStep = state.steps[state.activeTab] + 1;
    if (nextStep < steps[state.activeTab].length) {
      dispatch({
        type: "SET_STEP",
        payload: { role: state.activeTab, step: nextStep },
      });
    }
  };

  const handleTabChange = (event, newValue) => {
    dispatch({ type: "SET_TAB", payload: newValue });
  };

  const handleTimelineClick = (step) => {
    dispatch({ type: "SET_STEP", payload: { role: state.activeTab, step } });
  };

  return (
    <Container maxWidth="xl" sx={{ padding: { xs: "42px 0", md: "90px 0" } }}>
      <Grid container spacing={4}>
        <Grid item lg={4} display={"flex"} alignItems={"center"}>
          <Box>
            <SubHeading>How It Works</SubHeading>
            <Tabs
              value={state.activeTab}
              onChange={handleTabChange}
              sx={{
                marginTop: {
                  xs: "8px",
                  md: "24px",
                },
                "& .MuiTabs-scroller .MuiTabs-indicator": {
                  background: "#f14445",
                },
                "& .MuiButtonBase-root": {
                  textTransform: "capitalize",
                },
              }}
            >
              <StyledTab label="Shopper" value="shopper" />
              <StyledTab label="Vendor" value="vendor" />
            </Tabs>
            <Timeline
              sx={{
                margin: "24px 0 0 0",
                padding: "0",
              }}
            >
              {steps[state.activeTab].map((step, index) => (
                <TimelineItem
                  key={index}
                  onClick={() => handleTimelineClick(index)}
                  sx={{
                    cursor: "pointer",
                    "&::before": { content: "none" },
                  }}
                >
                  <TimelineSeparator>
                    <TimelineDot
                      color={
                        index <= state.steps[state.activeTab]
                          ? "primary"
                          : "grey"
                      }
                      sx={{
                        '&.MuiTimelineDot-filledPrimary': {
                          background: '#f14445'
                        },
                        '&.MuiTimelineDot-filledGrey': {
                          background: '#eaeaeb'
                        }
                      }}
                    />
                    {index < steps[state.activeTab].length - 1 && (
                      <TimelineConnector />
                    )}
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography
                      color={
                        index <= state.steps[state.activeTab]
                          ? "#181818"
                          : "#666666"
                      }
                      variant="h3"
                      sx={{
                        fontSize: {xs: '16px', md: "20px"},
                        fontWeight: "500",
                        marginBottom: "8px",
                      }}
                    >
                      {step.heading}
                    </Typography>
                    <Typography
                      color={
                        index <= state.steps[state.activeTab]
                          ? "#8a8a8a"
                          : "rgba(138, 138, 138, 0.5)"
                      }
                      variant="body1"
                      sx={{ fontSize: {xs: '14px', md: "16px"} }}
                    >
                      {step.paragraph}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
            <Box sx={{ marginTop: {xs: '1rem', md: '2rem'}, marginLeft: '1.4rem' }}>
              <CustomBtn
                value={
                  state.steps[state.activeTab] ===
                  steps[state.activeTab].length - 1
                    ? "Finish"
                    : "Get started"
                }
                size={"180px"}
                weight={600}
                bg={"rgba(241, 68, 69, 1)"}
                color={"#fff"}
                click={handleNext}
                disabled={
                  state.steps[state.activeTab] ===
                  steps[state.activeTab].length - 1
                }
              />
            </Box>
          </Box>
        </Grid>
        <Grid item lg={8}>
          <StyledImage
            src={images[state.activeTab][state.steps[state.activeTab]]}
            alt="How it works illustration"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

const StyledImage = styled("img")({
  width: "100%",
  maxWidth: "100%",
});

const SubHeading = styled("h2")(({ theme }) => ({
  fontSize: "40px",
  lineHeight: "52px",
  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
    lineHeight: "28px",
  },
  fontWeight: "600",
  color: "rgba(24, 24, 24, 1)",
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  color: "#8a8a8a",
  fontWeight: "normal",
  "&.Mui-selected": {
    color: "#181818",
    fontWeight: "bold",
  },
  "&:not(.Mui-selected)": {
    borderBottom: "2px solid transparent",
  },
  "&:hover": {
    color: "#181818",
  },
}));

export default Works;
