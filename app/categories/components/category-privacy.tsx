import styles from './category.module.scss'

export default function Category() {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Top issues</h2>
            <div className={styles.categories}>
                <details>
                    <summary>Smarthphones</summary>
                    <p>Smartphones are an integral day tool for modern society. It is a tool for everything we need and want daily. Many apps we download require permission to use your microphone, call logs, internet connection and other functions on your phone.</p>
                </details>
                <details>
                    <summary>Social media</summary>
                    <p>Another major privacy risk is social media, which allows us to share our lives with friends and family wherever we are. But do we own the content we upload? In their terms of service, Facebook and Instagram acquire a license to use your picture.</p>
                    <p>Advertising, promotions and selling the photos to a third party are options in which your pictures can be used without your knowledge or consent. (NordVPN, 2023)</p>
                    <p>Your information is no longer yours, or the company has a lease on it, according to their terms of service, which is the price of admission to some social media sites like Facebook or Instagram. (Mahmood S. 2013)</p>
                </details>
                <details>
                    <summary>Identity theft</summary>
                    <p>Social media is also a way for identity theft to occur. Identity theft is when your personal information, like your name or identifying number, is stolen to commit fraud or other crimes. Identity theft can be split into several categories, whereas the most common is financial identity theft. (McAfee, 2022)</p>
                    <p>Your stolen information can result in someone opening a bank account, applying for a credit card, getting medical services, or conducting other illegal activity in your name. (Fennelly & Perry, 2020)</p>
                </details>
            </div>
        </section>
    )
}