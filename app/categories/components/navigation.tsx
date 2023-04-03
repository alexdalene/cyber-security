import styles from './navigation.module.scss'
import Image from 'next/image'
import Link from 'next/link'

interface Navigation {
    url: string
}

export default function Navigation({url}: Navigation) {
    return (
        <section className={styles.container}>
            <Link href='/' className={styles.link}>Home</Link>
            <Link href={url} className={styles.link}>Next category</Link>
        </section>
    )
}