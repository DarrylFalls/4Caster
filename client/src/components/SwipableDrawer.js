import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { IconButton } from '@mui/material';
import './SwipableDrawer.css'

export default function SwipeableTemporaryDrawer(props) {

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className='drawer-display'
    >
      <List>
        <ListItem>
          <Link to='/' className='menu-link' onClick={() => {
            props.setLocation('')
            props.setOnHomePage(true)
          }}>
          Home
        </Link>
        </ListItem>
        <ListItem>
        {props.loggedIn && props.user !== 'Guest' ?
            <Link to='/'
            className='menu-link'
            onClick={() => {
            props.setLoggedIn(false)
            props.setUser('')
            props.setOnHomePage(true)
            props.setLocation('')
            }}>
            Logout
          </Link>
          :
            <Link to='/'
            className='menu-link'
            onClick={() => {
            props.setLoggedIn(false)
            props.setUser('')
            props.setOnHomePage(true)
            props.setLocation('')
            }}>
            Login
          </Link>}
          </ListItem>
        <Divider />
        <h3>Favorites:</h3>
        {props.userData && props.loggedIn && props.user !== 'Guest' ? props.userData.fields.favorites ? props.favorites.map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} onClick={async () => {
              props.setOnHomePage(false)
              const res = await axios.get(`https://www.mapquestapi.com/geocoding/v1/address?key=bTdBubAIGCp23LC0DL0nfCNW3R4HzIQj&location=${text}`)
              props.setLocation(res.data.results[0].locations[0])
            }}/>
          </ListItem>
        )) : null
        :
          <ListItemText
            primary='Login to use favorites.'
          />
        }
      </List>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            size="large"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuIcon style={{color: 'white'}}/>
          </IconButton>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}