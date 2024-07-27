import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import LocalMoviesOutlinedIcon from "@mui/icons-material/LocalMoviesOutlined";


const NavBar = () => {
  const [token, setToken_] = useState(localStorage.getItem("token"));

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenSettingsMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseSettingsMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div style={{backgroundColor: "#201f1f"}}>
      <Container component="main" maxWidth="xs" >
        <AppBar sx={{ background: "pink" }}>
          <Toolbar>
            <LocalMoviesOutlinedIcon color="disabled" fontSize="large" />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/home"
              sx={{
                mr: 2,
                fontWeight: 200,
                fontFamily: "roboto",
                color: "black",
                letterSpacing: ".2rem",
                textDecoration: "none",
              }}
            >
              Movie Reviews
            </Typography>

            <Box sx={{ flexGrow: 1, display: "flex" }}>
              <Link
                href="/movies"
                color="black"
                underline="none"
                sx={{ paddingLeft: 3, paddingRight: 3 }}
              >
                <Typography variant="button" display="block" gutterBottom>
                  Movies
                </Typography>
              </Link>
              <Link
                href="/movies"
                color="black"
                underline="none"
                sx={{ paddingRight: 3 }}
              >
                <Typography variant="button" display="block" gutterBottom>
                  Reviews
                </Typography>
              </Link>
             
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenSettingsMenu} sx={{ p: 0 }}>
                  <Avatar alt="Hellos" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                onClick={handleCloseSettingsMenu}
                sx={{ mt: "55px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseSettingsMenu}
              >
                <MenuItem key="1">
                  <Typography textAlign="center">
                    {" "}
                    <Link href="/" color="inherit" underline="none">
                      Logout
                    </Link>
                  </Typography>
                </MenuItem>
                <MenuItem key="2">
                  <Typography textAlign="center">
                    <Link href="/" color="inherit" underline="none">
                      Sign In
                    </Link>
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
       
      </Container>
    </div>
  );
};

export default NavBar;
