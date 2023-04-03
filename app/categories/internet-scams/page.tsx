'use client'
import { Manrope } from 'next/font/google'
import { Righteous } from 'next/font/google'
import styles from '../../page.module.scss'
import Hero from '../../components/hero'
import Divider from '../../components/divider'
import Section from '../../components/section'
import Footer from '../../components/footer'
import Category from '../components/category-scams'
import Quiz from '../components/quiz-scams'
import Navigation from '../components/navigation'

const manrope = Manrope({
  variable: '--manrope-font',
  subsets: ['latin'],
})

const righteous = Righteous({
  variable: '--righteous-font',
  subsets: ['latin'],
  weight: '400',
})

export default function Home() {
  return (
    <main className={[styles.main, manrope.variable, righteous.variable].join(' ')}>
      <Hero
      title='Internet Scams'
      />
      <Section 
      title='What are the dangers?'
      para1='Internet scams obtain money or personal information through fraudulent activities on the internet, by exploiting human vulnerabilities.'
      para2='Common scam methods include phishing, quid pro quo, health scams, baiting, investment scams, and pyramid schemes. Recognising these methods and being cautious online is the best defence.'
      para3='Remember, if something seems too good to be true, it probably is a scam.'
      />
      <Divider />
      <Category />
      <Divider />
      <Quiz />
      <Navigation 
      url=''
      />
      <Footer />
    </main>
  )
}
