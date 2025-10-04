import Button from "@/components/Button";
import globalStyle from "./page.module.css";
import styles from "./BoostLinkSection.module.css";


export default function BoostLinkSection() {
    return (
        <section className={styles.boostLinkSection}>
            <div className={globalStyle.container}>
                <h1>Boost your links today</h1>
                <Button>Get Started</Button>
            </div>
        </section>
    )
}