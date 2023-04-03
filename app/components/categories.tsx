import styles from './categories.module.scss'
import Link from 'next/link'

export default function Categories() {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Learn about</h2>
            <Link href='/categories/phishing' className={styles.button}>Phishing</Link>
            <Link href='/categories/privacy-threat' className={styles.button}>Privacy Threat</Link>
            <Link href='/categories/internet-scams' className={styles.button}>Internet Scam</Link>
            <Link href='/categories/malware' className={styles.button}>Malware</Link>
        </section>
    )
}