import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Button, Input, Link } from "@chakra-ui/react"
import { ArrowForwardIcon } from '@chakra-ui/icons'
import Script from 'next/script'
import React from 'react'
import swal from 'sweetalert'
import copy from 'copy-text-to-clipboard'

export default function Home() {
  function registerUser(event){
    event.preventDefault() // don't redirect the page
    var data__ = { name: event.target.name.value, url: event.target.url.value };
    fetch("/api/create", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data__),
    })
    swal("congrats!", "link was copied!: https://throw-me.now.sh/to?q="+event.target.url.value, "success");
    copy('https://throw-me.now.sh/to?q='+event.target.url.value);

  }

  return (
    <div className={styles.container}>
      <Head>
        <title>ThrowMeTo- A hassle free url shortner</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Throw-Me-To
          <div style={{ fontSize: '1rem' }}>
            ( it&apos;s a url shortner )
          </div>
        </h1>
        <p className={styles.description}>
          don&apos;t worry we&apos;ll throw you well.
        </p>
        <form onSubmit={registerUser}>
          
        <div className={styles.input_cont}>
          <Input placeholder="my-url-name" required id="url" name="url" type="text" />
          <Input placeholder="enter your looong url" id="name" name="name" type="url" required/>
        </div>
        <div className={styles.button_doiIt}>
          <Button id="button" type="submit" colorScheme="teal" rightIcon={<ArrowForwardIcon />} style={{ margin: "5px" }}>
            Do It!
          </Button>
        </div>

        </form>
      </main>

      <footer className={styles.footer}>
        <span className={styles.logo}>
          (c) {" "}
          <Link color="teal" href="https://twitter.com/volcareso">volcareso</Link>
        </span>
      </footer>
    </div>
  )
}
