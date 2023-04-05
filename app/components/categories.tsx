import styles from './categories.module.scss'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Categories() {
    return (
        <section className={styles.container}>
            <motion.h2 className={styles.title} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4}}>Learn about the various dangers.</motion.h2>
            <motion.div className={styles.buttons} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5}}>
                <Link href='/categories/phishing' className={styles.button}>Phishing</Link>
                <Link href='/categories/privacy-threat' className={styles.button}>Privacy Threat</Link>
                <Link href='/categories/internet-scams' className={styles.button}>Internet Scam</Link>
                <Link href='/categories/malware' className={styles.button}>Malware</Link>
            </motion.div>
        </section>
    )
}