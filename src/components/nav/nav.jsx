import React from 'react';
import classes from './nav.module.css';
import {NavLink} from 'react-router-dom';

const Nav = () => {
    return <nav className={classes.nav}>
           <div className = {`${classes.item} ${classes.active}`}>
               <NavLink to = "/profile" activeClassName = {classes.active}>Profile</NavLink>
           </div>
           <div className = {`${classes.item} ${classes.active}`}>
               <NavLink to = "/dialogs" activeClassName = {classes.active}>Messages</NavLink>
           </div>
           <div className = {classes.item}>
               <a>News</a>
           </div>
           <div className = {classes.item}>
               <a>Music</a>
           </div>
           <div className = {classes.item}>
               <a>Settings</a>
           </div>
       </nav>
}

export default Nav
