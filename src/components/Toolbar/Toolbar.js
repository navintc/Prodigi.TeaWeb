import React from 'react';
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';


const toolbar =props => (
        <header className="toolbar">
            <nav className="toolbar_navigation">
                <div className="toolbar_toggle_button">
                    <DrawerToggleButton click={props.drawerClickHandler}/>
                </div>
                <div className="toolbar_logo"><a href="/"></a></div>
                <div className="spacer" />
                <div className="toolbar_navigation_items">

                    <ul> 
                        <li><a href="/">Home</a></li>
                        <li><a href="/News">News</a></li>
                        <li><a href="/Gameinfo">Game Info</a></li>
                        <li><a href="/Gallery">Gallery</a></li>
                        <li><a href="/Community">Community</a></li>
                      
                    </ul> 
                </div>
            </nav>

        </header>


);

export default toolbar;

