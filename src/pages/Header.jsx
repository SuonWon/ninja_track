import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Avatar, Box, Button, Divider, Fade } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from "react-router-dom";
import localforage from 'localforage';

const Header = () => {

    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [user, setUser] = useState({});
    const [profileName, setProfileName] = useState('');

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        navigate('/Login');
        localforage.clear();
    }

    async function getLocalUser() {
        const user = await localforage.getItem('data');
        const name = user.fullName.split(' ');
        if(name.length > 1) {
            setProfileName(name[0].charAt(0) + name[name.length - 1].charAt(0))
        }
        else {
            setProfileName(name[0].charAt(0))
        }
        setUser(user);
    }

    useEffect(() => {
        getLocalUser();
    }, [])

    return (
        <Box className='shadow-xs sticky top-0'>
            <AppBar position="static">
            <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }} className='m-0 p-0 bg-white px-5' >
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            boxShadow: 'initial',
                            textDecoration: 'none',
                        }}
                        className='text-violet-600'
                    >
                        Ninja Track
                    </Typography>

                    <div>
                        <Button
                            id="fade-button"
                            aria-controls={open ? 'fade-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            sx={{ textTransform: 'capitalize', fontSize: '18px', cursor: 'default' }}
                            endIcon={<KeyboardArrowDownIcon sx={{ width: '25px', height: '25px' }} />}
                        >
                            <Avatar sx={{ marginRight: '10px' }}>{profileName}</Avatar>
                            <Typography>
                                {user.fullName}
                            </Typography>
                        </Button>
                        <Menu
                            id="fade-menu"
                            MenuListProps={{
                                'aria-labelledby': 'fade-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            TransitionComponent={Fade}
                        >
                            <Link to="/Setting/UserProfile">
                                <MenuItem onClick={handleClose} className='flex flex-row my-0 px-2'>
                                    <Avatar sx={{ width: '30px', height: '30px', marginRight: '10px' }} className='bg-gray-200'>U</Avatar>
                                    <div className='flex flex-col'>
                                        <Typography sx={{ fontSize: '15px' }} className='text-black'>
                                            {user.fullName}
                                        </Typography>
                                        <Typography sx={{ fontSize: '10px', textDecoration: 'underline' }} className='text-gray-500'>
                                            Edit Profile
                                        </Typography>
                                    </div>
                                </MenuItem>
                            </Link>
                            <Divider className="m-0 px-2" />
                            <MenuItem onClick={handleLogout}><LogoutIcon className='mr-4' /> Log out</MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header
