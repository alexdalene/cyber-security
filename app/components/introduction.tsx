import styles from './introduction.module.scss'

export default function Introduction() {
    return (
        <section className={styles.container}>
            <div className={styles.top}>
                <h2 className={styles.title}>Introductory Video</h2>
                <iframe width="100%" height="220" src="https://www.youtube-nocookie.com/embed/inWWhr5tnEA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className={styles.bottom}>
                <p>This simple video will cover:</p>
                <ul>
                    <li>What is cyber security?</li>
                    <li>How does it work & why?</li>
                    <li>Who is a cyber security expert?</li>
                    <li>The types of cyber-attacks</li>
                </ul>
            </div>
        </section>
    )
}