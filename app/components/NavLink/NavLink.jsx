"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import styles from "./NavLink.module.css";

const NavLink = ({children, href}) => {
    const path = usePathname();
    return (
        <Link
            className={path.startsWith(href) ? `${styles.link} ${styles.active}` : `${styles.link}`}
            href={href}
        >
            {children}
        </Link>
    );
};

export default NavLink;