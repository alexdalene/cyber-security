import styles from './section.module.scss'

interface Section {
    title: string,
    para1: string,
    para2: string,
    para3: string,
}

export default function Section({title, para1, para2, para3}: Section) {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>{title ? title : "Default title"}</h2>
            <p className={styles.para}>{para1 ? para1 : "Default paragraph 1"}</p>
            <p className={styles.para}>{para2 ? para2 : "Default paragraph 2"}</p>
            <p className={styles.para}>{para3 ? para3 : "Default paragraph 3"}</p>
        </section>
    )
}