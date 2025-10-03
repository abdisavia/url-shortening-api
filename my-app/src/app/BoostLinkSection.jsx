import Button from "@/components/Button";
import globalStyle from "./page.module.css";
import styles from "./BoostLinkSection.module.css";


export default function BoostLinkSection() {
    return (
        <section className={ globalStyle.container + " " + styles.boostLinkSection}>
            <h1>Boost your links today</h1>
            <Button>Get Started</Button>
        </section>
    )
}