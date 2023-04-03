import styles from './quiz.module.scss'

export default function Quiz() {
    const handleEventCorrect = e => {
        console.log(e)
        e.preventDefault()
        e.currentTarget.classList.add(`${styles.correct}`)
    }
    const handleEventWrong = e => {
        e.preventDefault()
        e.currentTarget.classList.add(`${styles.wrong}`)
    }

    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Quiz</h2>
            <p className={styles.question}>In their Terms of Service, Facebook acquires a license to use what?</p>
            <form action="" className={styles.answers}>
                <button type='submit' onClick={handleEventWrong} className={styles.button}>Your date of birth</button>
                <button type='submit' onClick={handleEventCorrect} className={styles.button}>Your picture</button>
                <button type='submit' onClick={handleEventWrong} className={styles.button}>Your relationship status</button>
            </form>
        </section>
    )
}