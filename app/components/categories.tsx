import styles from './categories.module.scss'
import Link from 'next/link'

export default function Categories() {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Learn about</h2>
            <Link href='' className={styles.button}>Phishing</Link>
            <Link href='' className={styles.button}>Privacy Threat</Link>
            <Link href='' className={styles.button}>Internet Scam</Link>
            <Link href='' className={styles.button}>Malware</Link>
        </section>
    )
}