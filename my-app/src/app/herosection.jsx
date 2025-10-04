import Button from "@/components/Button";
import styles from "./page.module.css";
import heroStyles from "./herosection.module.css";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className={heroStyles.heroSection}>
            <div className={styles.container + " " + heroStyles.heroContent}>
                <div className={heroStyles.heroCTA}>
                    <h1>More than just shorter links</h1>
                    <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                    <Button className={heroStyles.btnHero}>Get Started</Button>
                </div>
                <div className={heroStyles.heroImageContainer}>
                    <Image src="/images/illustration-working.svg" className={heroStyles.heroImage} alt="working illustration" width={500} height={500} objectFit="contain"/>
                </div>
            </div>
        </section >
    )
}