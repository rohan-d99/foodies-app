import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from "./MainHeader.module.css";
import logoImg from "@/assets/logo.png";
import MainHeaderBackground from '../MainHeaderBackground/MainHeaderBackground';
import NavLink from '../NavLink/NavLink';

const MainHeader = () => {
    return (
        <>
            <MainHeaderBackground />
            <header className={styles.header}>
            <Link className={styles.logo} href="/">
                <Image priority src={logoImg} alt='Food on a plate'/>
                    NextLevel Food
                </Link>

                <nav className={styles.nav}>
                    <ul>
                        <li>
                            <NavLink href="/meals">Browse Meals</NavLink>
                        </li>
                        <li>
                            <NavLink href="/community">Foodies Community</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default MainHeader;