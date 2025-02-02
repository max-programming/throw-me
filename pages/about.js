import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Button, Input, Link, Box, Heading } from "@chakra-ui/react"
import { ArrowForwardIcon } from '@chakra-ui/icons'
import Script from 'next/script'
import React from 'react'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About ThrowMe- The hassle free url shortner</title>
        <meta name="description" content="About the web app, which is, indeed, simple and straight" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="C6xnU6De7b5pwywkmMyctt0ljMz0CsD9FmbMF2b8oiI" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          About Throw-Me
          <div style={{ fontSize: '1rem' }}>
            ( it&apos;s a url shortner )
          </div>
        </h1>
        <p className={styles.description}>
          The hassle free url shortener...
        </p>
        <Box boxShadow='xl' p='5' m={4} rounded='md'>
           <Heading style={{ color: "#38B2AC" }}>What Is This?</Heading>
           Now a days, url shorteners are made to launch you to Mars, <br />
           It doesn&apos;t. <br />
           If you&apos;re expecting a url shortener to be elegant accessible, open source, free, ad-less, you&apos;re at the right place... <br />
           This product does exactly what it&apos;s said to, not less, not more.
        </Box>
        <Box boxShadow='xl' p='10' rounded='md'>
          <a href="https://www.producthunt.com/posts/throw-me?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-throw-me"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=321140&theme=light" alt="Throw-Me - A hassle free URL shortener | Product Hunt" style={{width: '250px', height: '54px'}} width="250" height="54" /></a>
          <a href="https://www.producthunt.com/posts/throw-me?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-throw-me"><img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=321140&theme=light&period=daily" alt="Throw-Me - A hassle free URL shortener | Product Hunt" style={{width: '250px', height: '54px'}} width="250" height="54" /></a>
          <a href="https://www.producthunt.com/posts/throw-me?utm_source=badge-review&utm_medium=badge&utm_souce=badge-throw-me#discussion-body"><img src="https://api.producthunt.com/widgets/embed-image/v1/review.svg?post_id=321140&theme=light" alt="Throw-Me - A hassle free URL shortener | Product Hunt" style={{width: '250px', height: '54px'}} width="250" height="54" /></a>
        </Box>
      </main>

      <footer className={styles.footer}>
        <span className={styles.logo}>
          
          <Link m={3} color="teal.500" href="/">Go Back ?</Link>          
          <Link m={3} color="teal.500" href="https://atordvairn.js.cool/">(c) atordvairn</Link>
          <Link m={3} color="teal.500" href="https://twitter.com/atordvairn">Twitter</Link>
          <Link m={3} color="teal.500" href="https://github.com/atordvairn">GitHub</Link>
        </span>
      </footer>
    </div>
  )
}
