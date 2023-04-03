import styles from './category.module.scss'

export default function Category() {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Different types of phishing attacks</h2>
            <div className={styles.categories}>
                <details>
                    <summary>Spear Phishing</summary>
                    <p>This type of phishing attack targets a specific individual or group of individuals, often using personal information to make the email or message appear more legitimate. (What Is Spear Phishing?, 2022)</p>
                </details>
                <details>
                    <summary>Whaling</summary>
                    <p>This is a type of spear phishing attack that targets high-level executives or individuals with access to valuable information, such as financial data or confidential files. (Whaling, 2023)</p>
                </details>
                <details>
                    <summary>Clone phishing</summary>
                    <p>This type of phishing attack involves creating a fake email that appears to come from a legitimate source, such as a bank or online service. The attacker clones a previously sent email and replaces a link or attachment with a malicious one. (Clone Phishing, 2023)</p>
                </details>
                <details>
                    <summary>Smishing</summary>
                    <p>This is a type of phishing attack that uses text messages to trick people into revealing sensitive information or downloading malware onto their devices. (What Is Smishing and How to Defend Against It, 2022)</p>
                </details>
            </div>
        </section>
    )
}