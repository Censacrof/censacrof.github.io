import Head from 'next/head'
import Image from 'next/image'
import { Monda } from '@next/font/google'
import styles from '../styles/Home.module.css'

const monda = Monda({weight: '400'})

export default function Home() {
  return (
    <>
      <h1 className='text-3xl font-bold underline text-surface'>
        Hello world!
      </h1>
      <p className='font-barcode-text text-surface'>
        Nice to meet you!
      </p>
    </>
  )
}
