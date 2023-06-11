import React from 'react'
import {Box,Container,styled,Typography} from '@mui/material';
import {Data} from '../../StaticData/Data';
import CustomCard from '../../Components/CustomCard/CustomCard';
const Dishes = () => {
    const DishesBOx = styled(Box)(({theme})=>({
        display:"flex",
        justifyContent:"space-between",
        marginTop:theme.spacing(5),
        [theme.breakpoints.down("md")]:{
            flexDirection:"column",
            alignItems:"center",
        },
    }));

    const PropertiesTextBox = styled(Box)(({theme})=>({
        [theme.breakpoints.down("md")]:{
            textAlign:"center",
        },
    }));
  return (
    <Box sx={{mt:5, backgroundColor:"#F5FAFE",py: 10}}>
        <Container>
            <PropertiesTextBox>
                <Typography sx={{color:"#000339",fontSize:"35px",fontWeight:"bold",ml:"13px"}}>
                        Featured Dishes
                </Typography>
                <Typography sx={{color:"#5A6473",fontSize:"16px",mt:1,ml:"13px"}}>
                       Explore Wide Variety of Indian Dishes!
                </Typography>
            </PropertiesTextBox>
            <DishesBOx>
                {Data.map((foodItem)=>(
                    <CustomCard
                    Key={foodItem.id}
                    img={foodItem.img}
                    price={foodItem.price}
                    item={foodItem.item}
                    likes={foodItem.likes}
                    heart={foodItem.heart}
                    share={foodItem.share}
                    />
                ))}
            </DishesBOx>
        </Container>
    </Box>
  )
}

export default Dishes