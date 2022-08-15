import React from 'react';
import s from  './Header.module.css';
function Header() {
    return (

        <header className={s.header}>
            <div className={s.container}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/S-Bahn-Logo.svg/1024px-S-Bahn-Logo.svg.png?20210607064056"
                alt=""/>
            </div>
        </header>

    )
}

export default Header