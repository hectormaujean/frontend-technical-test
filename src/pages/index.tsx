import type { FC } from "react";

import Head from "next/head";
import Link from "next/link";

import { Button } from "@mui/material";
import { orange } from "@mui/material/colors";

import styles from "../styles/Home.module.css";

const Home: FC = () => {
  const year = new Date().getFullYear();

  return (
    <div className={styles.container}>
      <Head>
        <title>Frontend Technical test - Leboncoin</title>
        <meta
          name="description"
          content="Frontend exercise for developpers who want to join us on leboncoin.fr"
        ></meta>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome !</h1>

        <p className={styles.description}>
          This test was done by <b>Hector</b> Maujean as part of a recruitment
          process for <b>leboncoin</b>
        </p>

        <Link href="/conversations" passHref>
          <Button
            variant="contained"
            sx={{
              backgroundColor: orange[700],
              ":hover": { backgroundColor: orange[800] },
            }}
          >
            Access the conversations
          </Button>
        </Link>

        <div className={styles.grid}>
          <article className={styles.card}>
            <h2>Design</h2>
            <p>Mostly based on Messenger for the Conversation page</p>
            <br />
            <p>
              Material UI because I didn’t get the opportunity to try the v5
              yet, so this was a good occasion
            </p>
          </article>

          <article className={styles.card}>
            <h2>Libraries</h2>
            <p>- React / Next.js</p>
            <p>- React Query w/ Axios</p>
            <p>- moment</p>
          </article>

          <article className={styles.card}>
            <h2>Timing</h2>
            <p>
              I spent around 5 hours on this test, with the overtime mostly due
              to getting familiar with Next.js
            </p>
          </article>

          <article className={styles.card}>
            <h2>Testing</h2>
            <p>
              Didn’t get the time to implement E2E testing or Integration tests,
              but I would have used <b>Cypress</b> for the former and{" "}
              <b>Jest</b> for the latter, as these are the two librairies I’m
              most familiar with
            </p>
          </article>
        </div>
      </main>

      <footer className={styles.footer}>&copy; leboncoin - {year}</footer>
    </div>
  );
};

export default Home;
