import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head';
import { Navbar } from '../components/Navbar';
import { Banner } from '@/components/Banner';
import { MamPool } from '@/components/Mampool'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
   <div>
      <Head>
        <title>Marathon</title>
        <link rel='icon' href='/logo.png' />
      </Head>
      <div className='marathon_header'>
      <Navbar />
      <Banner />
      </div>
      <MamPool />
    </div>
    </div>
  )
}
