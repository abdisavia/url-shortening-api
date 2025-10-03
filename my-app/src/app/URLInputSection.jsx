import URLInput from "@/components/URLInput";
import globStyles from "./page.module.css";
import HistoryURL from "@/components/HistroyURL";
import urlinputStyles from "./URLInputSection.module.css";

export default function URLInputSection() {
    return (
        <section className={urlinputStyles.urlInputSection }>
            <div className={globStyles.container+ " " + urlinputStyles.urlInputContianer}>
                <URLInput />
                <ul className={urlinputStyles.historyURLList}>
                    <li>
                        <HistoryURL/>
                    </li>
                    <li>
                        <HistoryURL/>
                    </li>
                    <li>
                        <HistoryURL/>
                    </li>
                    <li>
                        <HistoryURL/>
                    </li>
                    <li>
                        <HistoryURL/>
                    </li>
                </ul>
            </div>
        </section>
    )
}