import styles from './to-do.module.scss'
import Link from 'next/link'

export default function ToDo() {
    return (
        <section className={styles.container}>
            <h3 className={styles.title}>Take a shortcut?</h3>
            <div className={styles.buttons}>
                <Link href='/categories/phishing' className={styles.button}>Start learning</Link>
                <Link href='' className={styles.button}>Watch our self-made video</Link>
            </div>
        </section>
    )
}