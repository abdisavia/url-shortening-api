import URLInput from "@/components/URLInput";
import globStyles from "./page.module.css";

export default function URLInputSection() {
    return (
        <section>
            <div className={globStyles.container}>
                <URLInput />
            </div>
        </section>
    )
}