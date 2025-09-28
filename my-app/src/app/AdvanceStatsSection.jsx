import globalStyles from "./page.module.css";
import styles from "./AdvanceStatsSection.module.css";
import Image from "next/image";

export default function AdvanceStatsSection() {
    return (
        <section>
            <header className={globalStyles.container + " " + styles.advancedStatsHeader}>
                <h1>Advanced Statistics</h1>
                <p className={styles.advancedStatsDescription}>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </header>
            <ul className={globalStyles.container + " " + styles.advancedStatsList}>
                <li className={styles.advancedStatsCard}>
                    <div className={styles.iconContainer}>
                        <Image src="/images/icon-brand-recognition.svg" fill={true} alt="Brand Recognition icon"/>
                    </div>
                    <h1>Brand Recognition</h1>
                    <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
                </li>
                <li>
                    <h1>Detailed Records</h1>
                    <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                </li>
                <li>
                    <h1>Fully Customizable</h1>
                    <p>Improve brand awareness and content discoverability through customizable links, supercharging audiance engagement.</p>
                </li>
            </ul>
        </section>
    );
}