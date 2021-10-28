import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
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

  const favoritesClick = async (ev) => {
    props.setOnHomePage(false)
    console.log(ev.target.text)
    const res = await axios.get(`http://www.mapquestapi.com/geocoding/v1/address?key=bTdBubAIGCp23LC0DL0nfCNW3R4HzIQj&location=${ev.target.text}`)
    props.setLocation(res.data.results[0].locations[0])
    console.log(res.data)
  }

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
        <Link to='/' className='menu-link'>
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
        {props.userData && props.loggedIn && props.user !== 'Guest' ? props.userData.fields.favorites.map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} onClick={async () => {
              props.setOnHomePage(false)
              const res = await axios.get(`http://www.mapquestapi.com/geocoding/v1/address?key=bTdBubAIGCp23LC0DL0nfCNW3R4HzIQj&location=${text}`)
              props.setLocation(res.data.results[0].locations[0])
              console.log(res.data)
            }}/>
          </ListItem>
        )) : 
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
          >
            <MenuIcon onClick={toggleDrawer(anchor, true)} style={{color: 'white'}}/>
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