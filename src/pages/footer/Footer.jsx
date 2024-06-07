import { Container, Grid, styled, Box, Link, Typography } from '@mui/material'
import React from 'react'
import logo from "../../assets/images/header/headerlogo.png";
import { links } from '../header/links/links';


const Footer = () => {
  return (
    <>
      <Container maxWidth={false} sx={{
        background: 'rgba(245, 245, 245, 1)',
      }}>
        <Container maxWidth="xl" sx={{
          padding: '48px 0'
        }}>
          <Grid container alignItems={'center'} gap={{ xs: '1rem', lg: '0' }}>
            <Grid item xs="12" lg='3' display={'flex'} justifyContent={{xs: 'center', lg: 'flex-start'}}>
              <Link href='/'>
                <StyledImage src={logo} alt="Logo" />
              </Link>
            </Grid>
            <Grid item xs="12" lg='6' display={'flex'} justifyContent={'center'}>
            <Box
              sx={{ 
                display: 'flex',
                flexDirection: {
                  xs: 'column',
                  md: 'row'
                },
                alignItems: 'center'
               }}
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
            </Grid>
            <Grid item xs="12" lg='3' display={'flex'} justifyContent={{ xs: 'center', lg: 'flex-end' }}>
              <Typography sx={{
                color: 'rgba(138, 138, 138, 1)',
                fontSize: '14px',
              }}>
                © 2024 All rights reserved
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </>
  )
}

export default Footer;


const StyledImage = styled('img')(({ theme }) => ({
  width: '100%', 
  maxWidth: '200px',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '130px',
  },
}));
