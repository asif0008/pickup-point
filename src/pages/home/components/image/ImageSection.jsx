import React from 'react'
import { Container, styled } from '@mui/material'
import SecImage from '../../../../assets/images/imgSection/imagesection-img.png'

const ImageSection = () => {
  return (
    <>
      <Container maxWidth='xl' sx={{ padding: '0'}}>
        <StyledImage src={SecImage} alt={'image'}>

        </StyledImage>
      </Container>
    </>
  )
}

export default ImageSection;

const StyledImage = styled('img')(({ theme }) => ({
  width: '100%', 
  maxWidth: '100%',
}));
