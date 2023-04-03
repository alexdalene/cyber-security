import styles from './navigation.module.scss'
import Image from 'next/image'
import Link from 'next/link'

interface Navigation {
    url: string
    title: string
}

export default function Navigation({url, title}: Navigation) {
    return (
        <section className={styles.container}>
            <Link href='/' className={styles.link}>Home</Link>
            <Link href={url} className={styles.link}>{title ? title: 'Next category'}</Link>
        </section>
    )
}