import styles from "./button.module.css";

export default function Button({ children, type = "button", className = "", onClick }) {

    const style = () => {
        if (children === "Login") {
            return styles.btn + " " + styles.btnlogin
        }
        return styles.btn + " " + styles.btnDefault;
    }

    return (
        <button type={type} className={className + " " + style()} onClick={onClick}>
            {children}
        </button>
    );
}