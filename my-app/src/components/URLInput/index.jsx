import styles from "./style.module.css";
import Button from "../Button";

export default function URLInput() {
    return (
        <div className={ styles.urlInputContainer }>
            <input
                type="text"
                className={styles.urlInput + " " + styles.urlInputError}
                name="url input"
                id=""
                placeholder="Shorten a link here..." />
            <Button className={styles.btnShorten}>Shorten it!</Button>
            <p className={styles.inputErrorMessage}>Please add a link</p>
        </div>
    )
}   