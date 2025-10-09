"use client"
import styles from "./style.module.css";
import Button from "../Button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function URLInput() {
    const [message, setMessage] = useState({
        message:"",
        style:"",
    });
    const router = useRouter();


    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            let result = await fetch("/api/shorten",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(
                        {
                            url: e.target.url.value
                        }
                    )
                }
            )
            
            const data = await result.json();

            clearInput(e.target.url);
            if (data?.error) {
                console.log("Error")
                setMessage({
                    message: data?.error,
                    style: styles.urlInputError
                })
                return;                
            }

            window.location.reload();
                        
        } catch (error) {
            console.log(error);
        }
    }

    const clearInput = (input) => {
        input.value = "";
    }


    return (
        <form className={ styles.urlInputContainer } onSubmit={onSubmit} method="POST">
            <input
                type="text"
                className={styles.urlInput + " " + message.style}
                name="url"
                id=""
                placeholder="Shorten a link here..." />
            <i className={styles.inputErrorMessage}>{message.message}</i>
            <input type="submit" className={styles.btnShorten} value="Shorten it!"/>
        </form>
    )
}   