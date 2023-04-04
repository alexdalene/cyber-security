'use client'
import styles from './hero.module.scss'
import { motion } from 'framer-motion'

interface Hero {
    title: string
}

export default function Hero({title}: Hero) {
    return (
        <motion.header className={styles.header} initial={{ height: '100lvh' }} animate={{ height: '35rem' }} transition={{ duration: 1 }}>
            <motion.h1 className={styles.display} initial={{ opacity: 0 }} animate={{ opacity: 1, zIndex: 2 }} transition={{ delay: 0.3 }} >{title ? title: 'Default title'}</motion.h1>
        </motion.header>
    )
}