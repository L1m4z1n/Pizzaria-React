import React,{useState} from "react";
import logo from "../assets/logo.png";
import { BsCart2 } from "react-icons/bs";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import {HiOutlineBars3} from "react-icons/hi2";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"

const NavBar = () => {
    /*Hook do react*/
    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
        {
            text:"Home",
            icon: <HomeIcon/>,
        },
        {
            text:"Sobre Nós",
            icon: <InfoIcon/>,
        },
        {
            text:"Contato",
            icon: <PhoneRoundedIcon/>,
        },
        {
            text:"Carrinho",
            icon: <ShoppingCartRoundedIcon/>,
        },
    ]
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={logo} alt="logo"></img>
      </div>

      <div className="navbr-links-container">
        <a href="#home">Home</a>
        <a href="#sobre">Sobre Nós</a>
        <a href="#contato">Contato</a>
        <a href="#contato">
          <BsCart2 className="navbar-cart-icon" />
        </a>

        <button className="primary-button">Reservas Agora</button>
      </div>

      <div className="nav-bar-menu-container">
        <HiOutlineBars3 onClick={
            ()=> setOpenMenu(true)/*Abre*/
        }/>
      </div>

        <Drawer open={openMenu} onClose={()/*Fecha*/=>setOpenMenu(false)} anchor="right">
            <Box sx={{with:250}}
                role="presentation"
                onClick={() =>setOpenMenu(false)}
                onKeyDown={() =>setOpenMenu(false)}
                >
                <List>
                    {menuOptions.map((item)=>(
                        <ListItem key={item.text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text}/>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    </nav>
  );
};
export default NavBar;
