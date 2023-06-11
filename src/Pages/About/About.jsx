import React from "react";
import { styled, Box, Typography } from "@mui/material";

const About = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    width: "85%",
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
  }));
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
        mt: "65px",
        mb: "100px",
      }}
    >
      <div
        style={{
          width: "5%",
          height: "5px",
          borderRadius:"5px",
          backgroundColor: "#000339",
          margin: "0 auto",
        }}
      ></div>
      <Typography
        variant="h3"
        sx={{ fontSize: "35px", fontWeight: "bold", color: "#000339", my: 3 }}
      >
        About Us
      </Typography>
      <CustomBox>
        <Typography
          variant="body2"
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            color: "#5A6473",
            textAlign: "center",
          }}
        >
          Welcome to our restaurant! We take pride in serving fresh,
          locally-sourced ingredients to create delicious dishes that will
          tantalize your taste buds. Whether <br /> you're looking for a casual
          lunch or a romantic dinner, our cozy atmosphere is the perfect place
          to enjoy a memorable meal.
        </Typography>
      </CustomBox>
    </Box>
  );
};

export default About;
