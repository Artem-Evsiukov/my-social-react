import React from 'react';
import s from './SideBar.module.css';
import {NavLink} from "react-router-dom";

function SideBar() {
    return (
        <nav className={s.nav}>
            <ul className="nav_list">
                <li className={s.nav_item}>
                    <NavLink to="/Profile" className= { navData => navData.isActive ? s.active : s.item }>Profile</NavLink>
                </li>
                <li className={s.nav_item}>
                    <NavLink to="/Dialogs" className={navData => navData.isActive ? s.active : s.item}>Messages</NavLink>
                </li>
                <li className={s.nav_item}>
                    <NavLink to="/News" className={navData => navData.isActive ? s.active : s.item}>News</NavLink>
                </li>
                <li className={s.nav_item}>
                    <NavLink to="/Music" className={navData => navData.isActive ? s.active : s.item}>Music</NavLink>
                </li>
                <li className={s.nav_item}>
                    <NavLink to="/Settings" className={navData => navData.isActive ? s.active : s.item}>Settings</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default SideBar