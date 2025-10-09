"use client"
import { useEffect, useState } from "react";
import Button from "../Button";
import styles from "./historyURL.module.css";

export default function HistoryURL({ url_plain, url_shortened }) {
    const [isCopied, setIsCopied] = useState(false);
    
    useEffect(() => {
        if (isCopied) {
            setTimeout(() => {
                setIsCopied(false);
            },5000)
        }
    },[isCopied])

    const copyToClipboard = () => {
        navigator.clipboard.writeText(url_shortened);
        setIsCopied(true);
    }

    const isCopiedStyle = () => {
        if (isCopied) {
            return styles.button + " " + styles.buttonClicked;
        } else {
            return styles.button;
        }
    }

    return (
        <div className={styles.historyURLContainer}>
            <p>{url_plain}</p>
            <p className={styles.generatedUrl}>{ url_shortened }</p>
            <Button className={isCopiedStyle()} onClick={copyToClipboard}>{ isCopied?"Copied!":"Copy" }</Button>
        </div>
    );
}