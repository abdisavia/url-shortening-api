import Image from "next/image";
import Button from "../Button";
import styles from "./navbar.module.css";
import globalStyles from "../../app/page.module.css";
import btnStyle from "../Button/button.module.css";

export default function Navbar() {
    return (
        <header className={ globalStyles.container +" "+ styles.navbar }>
            <div className={styles.logo}>
                <Image src="/images/logo.svg" alt="Logo" fill={true} objectFit="contain" />
            </div>
            <nav className={styles.navitems}>
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