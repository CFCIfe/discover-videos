import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { useEffect, useState } from "react";

import styles from "../styles/Login.module.css";

import { magic } from "../../lib/magic-client";

const Login = () => {
  const [email, setEmail] = useState("");
  const [userMsg, setUserMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i;

  const router = useRouter();

  useEffect(() => {
    const handleComplete = () => {
      setIsLoading(false);
    };
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router.events]);

  const handleOnChangeEmail = (e) => {
    setUserMsg("");
    const email = e.target.value;
    setEmail(email);
  };

  const handleLoginWithEmail = async (e) => {
    e.preventDefault();

    const isValidEmail = emailRegex.test(email);
    if (isValidEmail) {
      if (email === "aboludepeter@gmail.com") {
        try {
          setIsLoading(true);
          const didToken = await magic.auth.loginWithMagicLink({ email });

          if (didToken) {
            router.push("/");
          }
        } catch (err) {
          setIsLoading(false);
          console.error(err);
        }
      } else {
        setIsLoading(false);
        setUserMsg("Something went wrong signing in");
      }
    } else {
      setIsLoading(false);
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
            {isLoading ? "Loading..." : "Sign in"}
          </button>
        </div>
      </main>
    </div>
  );
};

export default Login;
