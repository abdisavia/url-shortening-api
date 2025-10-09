"use client"
import Button from "../Button";
import styles from "./HistoryURLSkeleton.module.css";

export default function HistoryURLSkeleton() {
    
    return (
        <div className={styles.historyURLContainer}>
            <p></p>
            <p className={styles.generatedUrl}></p>
            <Button className={styles.button}></Button>
        </div>
    );
}