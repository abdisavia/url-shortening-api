import styles from './AdvanceStatisticCard.module.css';
import Image from 'next/image';


export default function AdvanceStatisticCard({ iconSrc, title, description }) {
    return (
        <li className={styles.advancedStatsCard}>
            <div className={styles.iconContainer}>
                <Image src={iconSrc} width={50} height={50} alt={`${title} icon`} />
            </div>
            <h1>{title}</h1>
            <p>{description}</p>
        </li>
    );
}