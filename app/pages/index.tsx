import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {signIn, useSession} from "next-auth/react"

export default function Home() {
  const {data: session} = useSession();

  if (session) {
    return (
      <div className={styles.Home}>
        <Head>
          <title>donationhouse</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          Signed in as {session.user.email} <br />
          <button>get house</button>
          <button>put house</button>
          <button className={styles.buttonGreen}>donation</button>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://github.com/bazylevnik0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by bazylevnik0 for Hack the Bronx 2
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
          </footer>
      </div>
    )
  } else {
    return (
      <div className={styles.Home}>
        <Head>
          <title>donationhouse</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <button onClick={()=>signIn()}>enter</button>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://github.com/bazylevnik0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by bazylevnik0 for Hack the Bronx 2
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer>
      </div>
    )
  }
}
