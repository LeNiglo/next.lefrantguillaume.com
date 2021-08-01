import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Head from 'next/head'
import HeaderBackground from '../components/HeaderBackground'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'header'])),
    },
  }
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Guillaume Lefrant</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <HeaderBackground />
      </main>
    </div>
  )
}
