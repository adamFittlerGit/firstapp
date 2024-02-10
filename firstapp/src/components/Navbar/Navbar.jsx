import React from 'react'
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery } from '@mui/material'
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import useStyles from './styles'
import { useTheme } from '@mui/material/styles'

const Navbar = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width:600px)');
    const theme = useTheme();
    const isAuthenticated = true;
    return (
        <>
            <AppBar position="fixed">
                <Toolbar className={classes.toolbar}>
                    {isMobile && (
                        <IconButton 
                            color="inherit"
                            edge="start"
                            style={{ outline: 'none'}}
                            onClick={() => {}}
                            className={classes.menuButton}
                        >
                            <Menu />
                        </IconButton>
                    )}
                    <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => {}}>
                        {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />} 
                    </IconButton>
                    {!isMobile && 'Search...'}
                    <div>
                        {!isAuthenticated ? (
                            <Button color="inherit" onClick={() => {}} >
                                Login &nbsp; <AccountCircle />
                            </Button>
                        ) : (
                            <Button 
                                color="inherit"
                                component={Link}
                                to={`/profile/:id`}
                                className={classes.linkButton}
                                onClick={() => {}}
                                >
                                {!isMobile && <>My Movies &nbsp;</>}
                                <Avatar 
                                    style={{width: 30, height: 30}}
                                    alt="Profile"
                                    src={'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fvectors%2Favatar-icon-placeholder-facebook-1577909%2F&psig=AOvVaw2O_baMroSHT6o-lbwB3zkD&ust=1707663087427000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKCvm_GCoYQDFQAAAAAdAAAAABAE'}
                                />
                            </Button>
                        )}
                    </div>
                    {isMobile && 'Search...'}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar