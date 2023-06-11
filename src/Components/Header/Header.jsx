import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import React, { useState } from 'react';
import CustomButton from "../CustomButton/CustomButton";
import logo from "../../assets/Images/FoodVio.png";

import MenuIcon from "@mui/icons-material/Menu";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function Header() {

const [mobileMenu, setMobileMenu] = useState({left:false});

const navigate = useNavigate()

const toggleDrawer = (anchor,open) =>(event)=>{
   if (event.type === "keydown" && (event.type === "Tab" || event.type === "Shift" )){
      return;
   }
   setMobileMenu({...mobileMenu,[anchor]:open})
}

const list = (anchor)=>(
        <Box 
        sx ={{
            width:anchor ==="top" || anchor === "bottom" ? "auto" : 250
        }}
        role="presentation"
        onClick={toggleDrawer(anchor,false)}
        onKeyDown = {toggleDrawer(anchor,false)}
        >
          <List>

            {
                nav_title.map((data,index)=>(
                    <ListItem key={data.index} disablePadding onClick={()=>navigate(data.path)}>
                    <ListItemButton>
                     <ListItemIcon>
                      {index === 0 && <HomeIcon/>}  
                      {index === 1 && <FeaturedPlayListIcon/>}  
                      {index === 2 && <MiscellaneousServicesIcon/>}  
                      {index === 3 && <ContactsIcon/>}  
                     </ListItemIcon>
                     <ListItemText primary ={data.display} />
                    </ListItemButton>
                 </ListItem>     

                ))
            }
          </List>
        </Box>
)

  const nav_title = [
    {
      path: "/",
      display: "Home",
    },
    {
      path: "/dishes",
      display: "Dishes",
    },
    {
      path: "/services",
      display: "Services",
    },
    {
      path: "/about",
      display: "About Us",
    },
  ];

  const NavBarLinksBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const NavBarLinks = styled(Typography)(() => ({
    fontSize: "1rem",
    color: "#4F5361",
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
      color: "#FFF",
    },
  }));

  const NavBarLogo = styled("img")(({ theme }) => ({
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    display:"none",
    marginRight:theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }));

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "40px",
        maxWidth: "auto",
        backgroundColor: "#FED801",
        marginLeft: "0px",
        marginBottom: "-24px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
            <CustomMenuIcon onClick={toggleDrawer("left",true)} />
            <Drawer 
            
            anchor="left"
            open={mobileMenu["left"]}
            onClose={toggleDrawer("left",false)}
            >
               {list("left")}
            </Drawer>
          <NavBarLogo src={logo} alt="Logo" style={{width:"40px",height:"25px"}}/>
        </Box>
        <NavBarLinksBox>
          {nav_title.map((data, index) => (
            <NavBarLinks variant="body2" onClick={()=>navigate(data.path)}>{data.display}</NavBarLinks>
          ))}
        </NavBarLinksBox>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.5rem",
        }}
      >
        <NavBarLinks variant="body2">Sign Up</NavBarLinks>
        <CustomButton
          backgroundColor="#0F1B4C"
          color="#fff"
          buttonText="Register"
        />
      </Box>
    </Box>
  );
}

export default Header;
