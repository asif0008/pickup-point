import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Link, Drawer, IconButton, styled } from "@mui/material";
import logo from "../../assets/images/header/headerlogo.png";
import { links } from "./links/links";
import CustomBtn from "../components/button/CustomBtn";
import HamburgerIcon from '../../assets/svgs/HamburgerIcon';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 100 ? true : false);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  // Function to toggle the Drawer state
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  // Render list items for the Drawer
  const drawerList = () => (
    <>
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        {links.map((link) => (
          <Link
            key={link.title}
            href={link.href || "#"}
            sx={{
              display: "block",
              padding: "16px",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: "400",
              color: "rgba(24, 24, 24, 1)",
            }}
          >
            {link.title}
          </Link>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
          padding: '0 16px'
        }}
      >
        <CustomBtn
          value={"Login"}
          bg={"rgba(245, 245, 245, 1)"}
          size={"67px"}
          color={"rgba(24, 24, 24, 1)"}
        />
        <CustomBtn
          value={"Register"}
          bg={"rgba(241, 68, 69, 1)"}
          size={"97px"}
          color={"rgba(254, 254, 255, 1)"}
          weight={600}
        />
      </Box>
    </>
  );

  return (
    <>
      <Container
        maxWidth={false}
        sx={{ background: "#fff", padding: { xs: "16px", lg: "32px 16px" } }}
      >
        <Container maxWidth="xl" className={isFixed ? 'header-container fixed' : ''} sx={{
          position: {xs:'unset', md: 'fixed'},
          top: '2.5%',
          left: '50%',
          zIndex: '999',
          transform: {xs: 'unset', md: 'translate(-50%, 2.5%)'},
          padding: {xs: '0', md: '1.7em'},
          background: '#fff',
        }}>
          <Grid container alignItems={"center"}>
            <Grid item xs={6} lg={2}>
              <Box sx={{ width: "200px" }}>
                <Link href='/'>
                  <StyledImage src={logo} alt="Logo" />
                </Link>
              </Box>
            </Grid>
            <Grid item md={8} sx={{ display: { xs: "none", lg: "block" } }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: {
                    xs: "1rem",
                    lg: "4rem",
                  },
                }}
              >
                {links.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href || "#"}
                    sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "rgba(24, 24, 24, 1)",
                    }}
                  >
                    {link.title}
                  </Link>
                ))}
              </Box>
            </Grid>
            <Grid item md={2} sx={{ display: { xs: "none", lg: "block" } }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  gap: "14px",
                }}
              >
                <CustomBtn
                  value={"Login"}
                  bg={"rgba(245, 245, 245, 1)"}
                  size={"99px"}
                  color={"rgba(24, 24, 24, 1)"}
                />
                <CustomBtn
                  value={"Register"}
                  bg={"rgba(241, 68, 69, 1)"}
                  size={"117px"}
                  color={"rgba(254, 254, 255, 1)"}
                  weight={600}
                />
              </Box>
            </Grid>
            <Grid item xs={6} sx={{ 
              display: { xs: "flex", lg: "none" },
              justifyContent: 'flex-end'
              }}>
              <IconButton onClick={toggleDrawer(true)}>
                <HamburgerIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Container>
      </Container>
      
      {/* Drawer component */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        {drawerList()}
      </Drawer>
    </>
  );
};

export default Header;


const StyledImage = styled('img')(({ theme }) => ({
  width: '100%', 
  maxWidth: '200px',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '130px',
  },
}));
