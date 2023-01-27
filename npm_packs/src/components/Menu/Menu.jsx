import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import "./Menu.scss";

export default function Menu(){
    return(
        <div className="Menu">
            <Box className="Menu__menuLinks">
                <Link to="/">Home</Link>
                <span></span>
            </Box>
            <Box className="Menu__menuLinks">
               <Link to="/forms">Formulário</Link> 
            </Box>
            <Box className="Menu__menuLinks">
                <Link to="/answers">Respostas</Link>
            </Box>            
            
        </div>
    )
}