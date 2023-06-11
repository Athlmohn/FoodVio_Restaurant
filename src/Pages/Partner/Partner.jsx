import React from 'react'
import {Box,Container,Typography} from '@mui/material';
import {styled} from '@mui/system';
import logoimg from '../../assets/Images/FoodVio.png';
import starsimg from '../../assets/Images/Star.png';
import logosImg from '../../assets/Images/logos.png'

const Partner = () => {

    const CustomContainer = styled(Container)(({theme}) =>({
         display:"flex",
         justifyContent:"space-between",
         [theme.breakpoints.down("md")]:{
            flexDirection:"column",
            alignItems:"center",
            textAlign:"center",
            marginBottom:theme.spacing(4),
         },        
    }));

    const CustomBox = styled(Box)(({theme}) =>({
        [theme.breakpoints.down("md")]:{
            marginBottom:theme.spacing(4),
        },
    }));
  return (
    <Box sx={{ mt:10}}>
          <CustomContainer>
               <CustomBox>
                  <img src={logoimg} alt="BrandLogo" style={{maxWidth:"20%"}}/>
                  <Typography variant="body2" sx={{color:"#7D8589",fontSize:"16px",fontWeight:"bold",mt:2}}>
                       More than 35,000 trust Techflix
                  </Typography>
               </CustomBox>
               <Box>
                  <img src={starsimg} alt="Ratingstars" style={{maxWidth:"100%"}} />
                  <Typography variant='body2' sx={{color:"#7D8589",fontSize:"16px",fontWeight:"bold",mt:2}}>
                        5-star Rating (3k+ Reviews)
                  </Typography>
               </Box>
          </CustomContainer>
          <Container sx={{display:"flex",flexDirection:"column"}}>
             <img src={logosImg} alt="companyLogos" />
          </Container>
    </Box>
  )
}

export default Partner