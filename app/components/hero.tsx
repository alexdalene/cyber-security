import styles from './hero.module.scss'

interface Hero {
    title: string
}

export default function Hero({title}: Hero) {
    return (
        <header className={styles.header}>
            <h1 className={styles.display}>{title ? title: 'Default title'}</h1>
        </header>
    )
}