import styles from './divider.module.scss'

export default function Divider() {
    return (
        <section className={styles.container}>
            <div className={styles.outerCircle}></div>
            <div className={styles.innerCircle}></div>
            <div className={styles.outerCircle}></div>
        </section>
    )
}