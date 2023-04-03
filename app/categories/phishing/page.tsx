'use client'
import { Manrope } from 'next/font/google'
import { Righteous } from 'next/font/google'
import styles from '../../page.module.scss'
import Hero from '../../components/hero'
import Divider from '../../components/divider'
import Section from '../../components/section'
import Footer from '../../components/footer'
import Category from '../components/category-phishing'
import Quiz from '../components/quiz-phishing'
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
      title='Phishing'
      />
      <Section 
      title='What is it?'
      para1='Phishing is one of the most common internet frauds. '
      para2='The national cyber security center has “As of February 2023 received over 18m reported phishing scams.” (NCSC Phishing, 2023)'
      para3='It is defined as “when criminals use scam emails, text messages or phone calls to trick their victims. The aim is often to make you visit a website, which may download a virus onto your computer, or steal bank details or other personal information. (NCSC Phishing, 2023)'
      />
      <Divider />
      <Category />
      <Divider />
      <Quiz />
      <Navigation 
      url='/categories/privacy-threat'
      />
      <Footer />
    </main>
  )
}
