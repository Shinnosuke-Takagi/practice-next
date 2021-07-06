import Head from 'next/head'
import Image from 'next/image'
import { Layout } from '../components/Layout'

export default function Home() {
  return (
    <Layout title="HOME">
      <p className="text-4xl">Welcome to next.js</p>
    </Layout>
  )
}
