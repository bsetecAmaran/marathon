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
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <Banner />
      <MamPool />
    </div>
    </div>
  )
}
