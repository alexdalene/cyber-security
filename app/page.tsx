'use client'
import { Manrope } from 'next/font/google'
import { Righteous } from 'next/font/google'
import styles from './page.module.scss'
import Hero from './components/hero'
import ToDo from './components/to-do'
import Introduction from './components/introduction'
import Divider from './components/divider'
import Section from './components/section'
import Categories from './components/categories'
import Footer from './components/footer'

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
      title='WELCOME'
      />
      <ToDo />
      <Introduction />
      <Divider />
      <Section 
      title='Who we are'
      para1='We are a group of five students from Noroff University College, pursuing a bachelor’s degree in cyber security. We are all currently in the first year of the bachelor.'
      para2='As technology evolves and the number of internet users rises, the occurrence of cyber threats and crime increases. Our task for this project was to create an informative artifact, and we decided to establish a website.'
      para3='The purpose of this website is to raise awareness and educate the public on how to protect themselves against cyber threats.'
      />
      <Divider />
      <Categories />
      <Footer />
    </main>
  )
}
