import styles from "./quiz.module.scss";

export default function Quiz() {
  const handleEventCorrect = (e) => {
    e.preventDefault();
    e.currentTarget.classList.add(`${styles.correct}`);
  };
  const handleEventWrong = (e) => {
    e.preventDefault();
    e.currentTarget.classList.add(`${styles.wrong}`);
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Quiz</h2>
      <p className={styles.question}>
        As of February 2023, how many phishing scams has been reported?
      </p>
      <form action="" className={styles.answers}>
        <button
          type="submit"
          onClick={handleEventCorrect}
          className={styles.button}
        >
          Over 18 million
        </button>
        <button
          type="submit"
          onClick={handleEventWrong}
          className={styles.button}
        >
          14 million
        </button>
        <button
          type="submit"
          onClick={handleEventWrong}
          className={styles.button}
        >
          Under 10 million
        </button>
      </form>
    </section>
  );
}
