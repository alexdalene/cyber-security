import styles from './footer.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Image width={1000} height={981} src='/images/noroff-logo.png' alt='' className={styles.logo}></Image>
            <section className={styles.info}>
                <div className={styles.container}>
                    <h4 className={styles.title}>References</h4>
                    <Link href='' className={[styles.link, styles.pdf].join(' ')}> <Image width={14} height={14} src='/images/link.svg' alt=''></Image> Click here</Link>
                </div>
                <div className={styles.container}>
                    <h4 className={styles.title}>Noroff</h4>
                    <Link href='' className={styles.link}>Read about our school</Link>
                    <Link href='' className={styles.link}>Cyber Security</Link>
                </div>
                <div className={styles.container}>
                    <h4 className={styles.title}>This website is made by</h4>
                    <Link href='' className={styles.link}>Alex Dalene</Link>
                </div>
            </section>
                <p className={styles.copyright}>&copy; Noroff Kristiansand</p>
        </footer>
    )
}