import styles from "./quiz.module.scss";

export default function Quiz() {
  const handleEventCorrect = (e) => {
    console.log(e);
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
        What is often the primary reason for security breaches?
      </p>
      <form action="" className={styles.answers}>
        <button
          type="submit"
          onClick={handleEventWrong}
          className={styles.button}
        >
          Direct attack
        </button>
        <button
          type="submit"
          onClick={handleEventCorrect}
          className={styles.button}
        >
          Human vulnerabilities
        </button>
        <button
          type="submit"
          onClick={handleEventWrong}
          className={styles.button}
        >
          Bad firewall
        </button>
      </form>
    </section>
  );
}
