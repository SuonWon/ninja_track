import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { MdLogout } from "react-icons/md";
import { AiFillCaretDown } from "react-icons/ai";



const Header = () => {

  const [anchorElUser, setAnchorElUser] = React.useState(null);


  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div className='shadow-sm fixed-top'>
      <AppBar position="static">
        <Container maxWidth="2xl" style={{ backgroundColor:'white' }} >
          <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }} >
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                fontFamily: 'monospace',
                fontWeight: 700,
                color: 'light',
                boxShadow: 'initial',
                textDecoration: 'none',
              }}
            >
              Ninja Track
            </Typography>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar sx={{ mr: 1 }} style={{ width: '40px', height: '40px' }} >U</Avatar>
                  <Typography textAlign="center" sx={{ display: 'flex', alignItems: 'center' }} >User Name </Typography>
                  <AiFillCaretDown style={{ width: '20px' }} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px', width: 400 }}
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu} >
                  <Avatar sx={{ mr: 1 }}>H</Avatar>
                  <Typography textAlign="center">Username</Typography>
                </MenuItem>
                <hr />
                <MenuItem onClick={handleCloseUserMenu} >
                  <Typography textAlign="center"><MdLogout /> Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>

          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}

export default Header