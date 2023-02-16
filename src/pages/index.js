import Head from 'next/head'

import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Layout from 'Layouts/Layout'
import HeroUi from 'components/HeroUi'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Layout>
        <HeroUi />
        
      </Layout>
    </>
  )
}
