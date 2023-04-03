import styles from './category.module.scss'

export default function Category() {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Different types of internet scams</h2>
            <div className={styles.categories}>
                <details>
                    <summary>Quid Pro Quo</summary>
                    <p>Offering a benefit or threatening exposure unless the scammer receives something in return; quid pro quo scams can lead to severe consequences. Be cautious when offered unsolicited benefits, and protect your personal information.</p>
                </details>
                <details>
                    <summary>Health scams</summary>
                    <p>Health scams promote unproven or dangerous products and treatments with false claims for profit. Be wary of miracle cures or instant benefits, and consult a healthcare professional before trying new treatments.</p>
                </details>
                <details>
                    <summary>Baiting scams</summary>
                    <p>Baiting scams use physical or digital bait to obtain confidential information by sparking victims' curiosity. Be cautious of unexpected freebies or downloads, and avoid inserting unfamiliar devices into your computer.</p>
                </details>
                <details>
                    <summary>Investment scams</summary>
                    <p>Promising high returns with low risk, investment scams often involve unrealistic opportunities. Be sceptical of investments that sound too good to be true and research any potential investments thoroughly.</p>
                </details>
                <details>
                    <summary>Pyramid schemes</summary>
                    <p>Pyramid schemes collapse when new investors stop joining, causing losses for participants at the bottom. Be cautious of schemes requiring recruitment to earn returns and research the company before investing.</p>
                </details>
            </div>
        </section>
    )
}