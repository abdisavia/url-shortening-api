import globalStyle from "./page.module.css";
import styles from "./ShortlyFooter.module.css";
import Image from "next/image";

export default function ShortlyFooter() {
    return (
        <footer className={globalStyle.container + " " + styles.shortlyFooter}>
            <nav>
                <h1 className={styles.title}>Shortly</h1>
                <div className={styles.footerLinks}>
                    <FooterLink href={["#","#","#"]} text={["Link Shortening", "Branded Links", "Analytics"]} headerText={"Features"} />
                    <FooterLink href={["#","#","#"]} text={["Blog", "Developers", "Support"]} headerText={"Resources"} />
                    <FooterLink href={["#","#","#","#"]} text={["About", "Our Team", "Careers", "Contact"]} headerText={"Company"} />
                </div>
                <ul className={styles.socialMediaLinks}>
                    <li>
                        <a href="">
                            <Image src="/images/icon-facebook.svg" width={20} height={20} alt="Facebook Icon"/>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <Image src="/images/icon-twitter.svg" width={20} height={20} alt="twitter icon"/>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <Image src="/images/icon-pinterest.svg" width={20} height={20} alt="Pinterest icon"/>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <Image src="/images/icon-instagram.svg" width={20} height={20} alt="Instagram Icon"/>
                        </a>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

function FooterLink({ href, text, headerText }) {
    if(href.length !== text.length) {
        console.log("link and text must have the same length");
        return;
    }
    if (!Array.isArray(text)) {
        console.log("text must be an array");
        return;
    }
    if (!Array.isArray) {
        console.log("link must be an array");
        return;
    }
    if (typeof (headerText) !== "string") {
        console.log("headerText must be a string");
        return;
    }

    return (
        <hgroup>
            <h2>{ headerText }</h2>
            <ul>
                {text.map((item, index) => {
                    return (
                        <li key={headerText + " " + index}>
                            <a href={href[index]}>{item}</a>
                        </li>
                    )
                }) }
            </ul>
        </hgroup>
    )
}