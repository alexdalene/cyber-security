'use client'
import styles from './hero.module.scss'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero({title, children}: {title: string, children: React.ReactNode}) {
    const { scrollY } = useScroll()
    const y = useTransform(scrollY, [0, 1], [0, -0.1], {
          clamp: false,
    })

    return (
        <motion.header className={styles.header} initial={{ height: '100lvh' }} transition={{ delay: 1, duration: 0.6 }} style={{ y: y }}>
            <motion.h1 className={styles.display} initial={{ opacity: 0 }} animate={{ opacity: 1, zIndex: 2 }} transition={{ delay: 0.3 }} >{title ? title: 'Default title'}</motion.h1>
            { children }
        </motion.header>
    )
}