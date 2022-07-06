import React from "react";
import "./Sidebar.css";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Logo from "../../asset/logo.png";
import {
  Home,
  FileCopy,
  ShoppingCartCheckout,
  LocalMall,
  Store,
  Person,
  Print,
  Factory,
  Settings,
  SupportAgent,
} from "@mui/icons-material";
import Appbar from "../Appbar/Appbar";
import DropDown from "../dropDown/Dropdown";
const drawerWidth = 240;
export default function Sidebar() {
  const Iconlist = [
    <Home />,
    <FileCopy />,
    <ShoppingCartCheckout />,
    <LocalMall />,
    <Store />,
    <Person />,
    <ShoppingCartCheckout />,
    <Print />,
    <Factory />,
    <Settings />,
    <SupportAgent />,
  ];
  return (
    <div className="Sidebar-Container">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <div className="Sidebar-Logo">
            <img src={Logo} alt="" />
          </div>
          <List>
            {[
              "Dashboard",
              <DropDown links={["Supplier Master","Supplier Master","Supplier Master","Supplier Master"]} label={"Master"}/>,
              "Purchase Order",
              "Sales",
              "Store",
              "Customer",
              "Purchase",
              "Stock Transfer",
              "Production",
              "Setting",
              "Help & Support",
            ].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{Iconlist[index]}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>
    </div>
  );
}
