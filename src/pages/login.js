import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { useState } from "react";

import styles from "../styles/Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [userMsg, setUserMsg] = useState("");
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i;
  const router = useRouter();

  const handleOnChangeEmail = (e) => {
    setUserMsg("");
    console.log({ e });
    const email = e.target.value;
    setEmail(email);
  };

  const handleLoginWithEmail = (e) => {
    e.preventDefault();

    const isValidEmail = emailRegex.test(email);
    if (isValidEmail) {
      if (email === "aboludepeter@gmail.com") {
        // route to dashboard
        router.push("/");
      } else {
        setUserMsg("Something went wrong signing in");
      }
    } else {
      // show user message
      setUserMsg("Enter a valid email address");
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix Sign in</title>
      </Head>
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <Link href="/" legacyBehavior>
            <a className={styles.logoLink}>
              <div className={styles.logoWrapper}>
                <Image
                  src={"/static/netflix.svg"}
                  alt="Netflix Logo"
                  width={128}
                  height={35}
                />
              </div>
            </a>
          </Link>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.mainWrapper}>
          <h1 className={styles.signinHeader}>Sign In</h1>
          <input
            type="text"
            placeholder="Email address"
            className={styles.emailInput}
            onChange={handleOnChangeEmail}
          />
          <p className={styles.userMsg}>{userMsg} </p>
          <button onClick={handleLoginWithEmail} className={styles.loginBtn}>
            Sign In
          </button>
        </div>
      </main>
    </div>
  );
};

export default Login;
