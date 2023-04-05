import styles from './footer.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.images}>
                <Image width={1000} height={981} src='/images/noroff-logo.png' alt='logo for noroff school of technology' className={styles.logo}></Image>
                <Link href='https://tailwind-portfolio-woad.vercel.app/' target='_blank'><Image width={1000} height={981} src='/images/dalene-logo.svg' alt='logo for alex dalene' className={styles.logo}></Image></Link>
            </div>
            <section className={styles.info}>
                <div className={styles.container}>
                    <h4 className={styles.title}>References</h4>
                    <Link href='/refer.pdf' target='_blank' className={[styles.link, styles.pdf].join(' ')}> <Image width={14} height={14} src='/images/link.svg' alt=''></Image> Click here</Link>
                </div>
                <div className={styles.container}>
                    <h4 className={styles.title}>Noroff</h4>
                    <Link href='https://www.noroff.no/index.php' target='_blank' className={styles.link}>Read about our school</Link>
                    <Link href='https://www.noroff.no/studier/hoyskole/cyber-security' target='_blank' className={styles.link}>Cyber Security</Link>
                </div>
                <div className={styles.container}>
                    <h4 className={styles.title}>This website is made by</h4>
                    <Link href='https://tailwind-portfolio-woad.vercel.app/' target='_blank' className={styles.link}>Alex Dalene</Link>
                </div>
            </section>
                <p className={styles.copyright}>&copy; Noroff Kristiansand 2023</p>
        </footer>
    )
}