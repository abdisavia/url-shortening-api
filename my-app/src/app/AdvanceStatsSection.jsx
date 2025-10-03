import globalStyles from "./page.module.css";
import styles from "./AdvanceStatsSection.module.css";
import AdvanceStatisticCard from "@/components/AdvanceStatisticCard";

export default function AdvanceStatsSection() {
    return (
        <section className={styles.advancedStatsSection}>
            <header className={globalStyles.container + " " + styles.advancedStatsHeader}>
                <h1>Advanced Statistics</h1>
                <p className={styles.advancedStatsDescription}>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </header>
            <ul className={globalStyles.container + " " + styles.advancedStatsList}>
                <AdvanceStatisticCard
                    iconSrc="/images/icon-brand-recognition.svg"
                    title="Brand Recognition"
                    description="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
                />
                <AdvanceStatisticCard
                    iconSrc="/images/icon-detailed-records.svg"
                    title="Detailed Records"
                    description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
                />
                <AdvanceStatisticCard
                    iconSrc="/images/icon-fully-customizable.svg"
                    title="Fully Customizable"
                    description="Improve brand awareness and content discoverability through customizable links, supercharging audiance engagement."
                />
                <hr />
            </ul>
        </section>
    );
}