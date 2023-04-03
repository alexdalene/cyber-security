'use client'
import { Manrope } from 'next/font/google'
import { Righteous } from 'next/font/google'
import styles from '../../page.module.scss'
import Hero from '../../components/hero'
import Divider from '../../components/divider'
import Section from '../../components/section'
import Footer from '../../components/footer'
import Category from '../components/category-privacy'
import Quiz from '../components/quiz-privacy'
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
      title='Privacy Threat'
      />
      <Section 
      title='Why is it important?'
      para1='We live in a society where our online presence impacts our daily lives.'
      para2='Technology is interconnected with our jobs and leisure activities. We all generate massive amounts of data, which companies use for their gain. Your digital profile generated online could be a privacy risk.'
      para3='The massive amounts of data in the online space generated by using different services. You make purchases through online stores. Conversations on your phone, messaging, and voice over internet applications. Smartphones, social media, and identity theft are some issues you will read about.'
      />
      <Divider />
      <Category />
      <Divider />
      <Quiz />
      <Navigation 
      url='/categories/internet-scams'
      title=''
      />
      <Footer />
    </main>
  )
}
