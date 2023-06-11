import React from 'react'
import {Box,styled,Typography} from '@mui/material';
import likeIcon from '../../assets/Images/like.png';
import heartIcon from '../../assets/Images/heart.png';
import shareIcon from '../../assets/Images/share.png';

const CustomCard = ({img,price,item,likes,heart,share}) => {
    const DishBox = styled(Box)(({theme})=>({
        borderTopLeftRadius:"10px",
        borderTopRightRadius:"10px",
        maxWidth:350,
        backgroundColor:"#FFF",
        margin: theme.spacing(0,2,0,2),
        [theme.breakpoints.down("md")]:{
            margin: theme.spacing(2,0,2,0),
        },
        "&:hover":{
            backgroundColor:"#F5F5F5",
            boxShadow:"0 0 5px rgba(0,0,0,0.2)",
            transform:"scale(1.05)",
            transition:"all 0.3s ease-in-out",
        },
    }));

    const InfoBox = styled(Box)(()=>({
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
    }));

    const ImageContainer = styled(Box)(()=>({
        width:"100%",
    }));
  return (
    <DishBox>
        <ImageContainer>
            <img src={img} alt="HousePhoto" style={{maxWidth:"100%"}} />
        </ImageContainer>
        <Box sx={{padding:"1rem"}}>
         <Typography variant='body2' sx={{fontWeight:"700"}}>
           ₹{price}
         </Typography>
         <Typography variant='body2' sx={{my:2}}>
            {item}
         </Typography>
         <Box sx={{
            display:"flex",
            alignItems:"center",
            justifyContent:"space-between"
         }}>
            <InfoBox>
                <img src={likeIcon} alt="Likes"/>
                <Typography variant='body2' sx={{mt:1}}>
                    {likes}
                </Typography>
                </InfoBox>

                <InfoBox>
                    <img src={heartIcon} alt="Hearts" />
                    <Typography variant='body2' sx={{mt:1}}>
                        {heart}
                        </Typography>
                </InfoBox>

                <InfoBox>
                    <img src={shareIcon} alt="Share" />
                    <Typography variant='body2' sx={{mt:1}}>
                         {share}
                        </Typography>
                </InfoBox>
         </Box>
        </Box>
    </DishBox>
  )
}

export default CustomCard