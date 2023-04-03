import styles from './hero.module.scss'

export default function Hero() {
    return (
        <header className={styles.header}>
            <h1 className={styles.display}>Welcome to our website</h1>
        </header>
    )
}