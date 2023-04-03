import styles from './to-do.module.scss'
import Link from 'next/link'

export default function ToDo() {
    return (
        <section className={styles.container}>
            <h3 className={styles.title}>What would you like to do?</h3>
            <div className={styles.buttons}>
                <Link href='' className={styles.button}>Start learning the topics</Link>
                <Link href='' className={styles.button}>Watch our self-made video</Link>
            </div>
        </section>
    )
}