import React from 'react'
import {styled} from '@mui/system'
import { Button } from '@mui/material';

const CustomButton = ({
    backgroundColor,
    color,
    buttonText,
    welcomeBtn,
    guideBtn,
    getStartedBtn,
}) => {
    
    const CustomButton = styled (Button)(({theme})=>({
    backgroundColor:backgroundColor,
    color:color,
    fontWeight:"700",
    fontSize:"0.7rem",
    cursor:"pointer",
    padding:"0.6rem 1.30rem",
    borderRadius:"7px",
    textTransform:"none",
    display:"block",
    border:"2px solid transparent",
    "&:hover":{
        backgroundColor:color,
        color:backgroundColor,
        borderColor:backgroundColor,
    },
    [theme.breakpoints.down("md")] : {
        margin: (welcomeBtn || getStartedBtn) && theme.spacing(0, "auto",3, "auto"),
        width: (welcomeBtn || getStartedBtn) && "90%",
    },
    [theme.breakpoints.down("sm")] : {
       marginTop: guideBtn && theme.spacing(3),
       width: guideBtn && "90%",
    },
}));
return (
   <CustomButton>{buttonText}</CustomButton>
  );
};

export default CustomButton