import Button from "../Button";
import styles from "./historyURL.module.css";

export default function HistoryURL() {
    return (
        <div className={styles.historyURLContainer}>
            <p>https://www.frontendmentor.ioasaetaseadfaefasfs</p>
            <p className={ styles.generatedUrl }>https://rel.ink/k4Kyk</p>
            <Button className={styles.button}>Copy</Button>
        </div>
    );
}