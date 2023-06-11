import React from 'react'
import { Box, Typography } from '@mui/material'
import {styled} from '@mui/system'
import {Container} from '@mui/system'

import fbIcon from '../../assets/Images/facebook.png'
import twitterIcon from '../../assets/Images/twitter.png'
import instagramIcon from '../../assets/Images/instagram.png'
import { useNavigate } from 'react-router-dom';
const Footer =()=>{

    const navigate = useNavigate()
const featuredLink = [{
    path:"/",
    display:"Guides"
},{
    path:"/services",
    display:"Services"
},
{
    path:"/",
    display:"Contact Us"
}];

const OverviewLink = [
    {
        path:"/",
        display:"Location"
    },
    {
        path:"/partners",
        display:"Partnerships"
    },
    {
        path:"/",
        display:"Terms of Use & Privacy Policies"
    },
]
const CustomContainer = styled(Container)(({theme})=>({
    display:"flex",
    justifyContent:"space-around",
    gap:theme.spacing(5),
    [theme.breakpoints.down("sm")]:{
        flexDirection: "column",
        textAlign: "center",
    },
}));

const FooterLink = styled("span")(({theme})=>({
       fontSize:"16px",
       color:"#000066",
       fontWeight:"300",
       cursor:"pointer",
       "&:hover": {
            color:"#DB34A4"
       },
}));

const IconBox = styled(Box)(({theme})=>({
    display:"flex",
    alignItems:"center",
    gap:"1rem",
    [theme.breakpoints.down("sm")]:{
        justifyContent:"center"
    },
}));
  return (
    <Box sx={{ py:10, backgroundColor:"#FFF6B2"}}>
        <CustomContainer>
           <Box>
                <Typography sx={{
                    fontSize:"20px",
                    color:"#1C1C1D",
                    fontWeight:"700",
                    mb: 2,
                }}>
                    Featured
                </Typography>
                {
                     featuredLink.map((item)=>(
                        <FooterLink onClick={()=>navigate(item.path)}>{item.display}<br/></FooterLink>
                    ))
                }
                
                
           </Box>
           <Box>
           <Typography sx={{
                    fontSize:"20px",
                    color:"#1C1C1D",
                    fontWeight:"700",
                    mb: 2,
                }}>
                    Overview
                </Typography>
                {
                       OverviewLink.map((item)=>(
                        <FooterLink onClick={()=>navigate(item.path)}>{item.display}<br/></FooterLink>
                    ))
                }
           </Box>
           <Box>
           <Typography sx={{
                    fontSize:"20px",
                    color:"#1C1C1D",
                    fontWeight:"700",
                    mb: 2,
                }}>
                    Get in touch 
                </Typography>

                <Typography sx={{
                    fontSize:"16px",
                    color:"#7A7A7E",
                    fontWeight:"500",
                    mb: 2,
                }}>
                    Keep in touch with our social media pages.
                </Typography>

                <IconBox>
                    <img src={fbIcon} alt="Facebooklogo" style={{cursor:"pointer"}} />
                    <img src={twitterIcon} alt="Twitterlogo" style={{cursor:"pointer"}} />
                    <img src={instagramIcon} alt="Instagramlogo" style={{cursor:"pointer"}} />
                </IconBox>
           </Box>
        </CustomContainer>
    </Box>
  )
}

export default Footer