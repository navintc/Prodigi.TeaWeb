import React from 'react';
import './SideDrawer.css';

const sideDrawer = props =>{

    let drawerClasses = ['side-drawer'];
    if (props.show){
        drawerClasses=['side-drawer open']
    }

    //43.35

    return(
        <nav className ={drawerClasses}>
            <ul className="drawertags">
                <li><a href="/">Home</a></li>
                <li><a href="/News">News</a></li>
                <li><a href="/Gameinfo">Game Info</a></li>
                <li><a href="/Gallery">Gallery</a></li>
                <li><a href="/Community">Community</a></li>
            </ul>
        </nav>
    );
} ;

export default sideDrawer;