"use client";
import Image from "next/image";
import Button from "../Button";
import styles from "./navbar.module.css";
import globalStyles from "../../app/page.module.css";
import btnStyle from "../Button/button.module.css";
import { useState } from "react";


export default function Navbar() {
    const [navbarStyles, setNavbarStyles] = useState("");


    const MobileNavIconOnclick = () => {
        if (navbarStyles == "") {
            setNavbarStyles(styles.centeredNavItems);
            return;
        }
        setNavbarStyles("");
    }

    return (
        <header className={ globalStyles.container +" "+ styles.navbar }>
            <div className={styles.logo}>
                <Image src="/images/logo.svg" alt="Logo" fill={true} objectFit="contain" />
            </div>

            <div className={styles.logo + " " + styles.menuMobileIcon}>
                <button onClick={MobileNavIconOnclick} className={ styles.menuMobileButton }>
                    <Image src="/images/Menu.svg" alt="Navbar Icon for Mobile" width={50} height={50} objectFit="contain" />
                </button>
            </div>

            <nav className={styles.navitems + " " + navbarStyles}>
                <ul className={styles.navlinks+" "+styles.navlinksitems}>
                    <li><a href="">Feature</a></li>
                    <li><a href="">Pricing</a></li>
                    <li><a href="">Resources</a></li>
                </ul>
                <ul className={styles.navlinks+" "+styles.navbuttonsitems}>
                    <li><Button>Login</Button></li>
                    <li><Button>Signup</Button></li>
                </ul>
            </nav>
        </header>
    );
}