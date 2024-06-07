import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography } from "@mui/material";
import Community from "../Cummunity";

const CustomSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box>
      <Slider {...settings}>
        <Box>
          <Community />
        </Box>
        <Box>
          <Community />
        </Box>
        <Box>
          <Community />
        </Box>
      </Slider>
    </Box>
  );
};

export default CustomSlider;
