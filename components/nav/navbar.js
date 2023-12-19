import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

const NavBar = (props) => {
  const { username } = props;

  const [showDropdown, setShowDropDown] = useState(false);

  const router = useRouter();
  const handleOnClickHome = (e) => {
    e.preventDefault();
    router.push("/");
  };
  const handleOnClickMyList = (e) => {
    e.preventDefault();
    router.push("/browse/my-list");
  };
  const handleShowDropdown = (e) => {
    e.preventDefault();
    setShowDropDown(!showDropdown);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link href="/" legacyBehavior>
          <a className={styles.logoLink}>
            <div className={styles.logoWrapper}>Netflix</div>
          </a>
        </Link>
        <ul className={styles.navItems}>
          <li className={styles.navItem} onClick={handleOnClickHome}>
            Home
          </li>
          <li className={styles.navItem2} onClick={handleOnClickMyList}>
            My List
          </li>
        </ul>
        <nav className={styles.navContainer}>
          <div>
            <button className={styles.usernameBtn} onClick={handleShowDropdown}>
              <p className={styles.username}>{username}</p>
              <Image
                src="../../public/static/expand_more.svg"
                alt="drop down arrow"
                width={50}
                height={50}
              />
            </button>

            {showDropdown && (
              <div className={styles.navDropdown}>
                <div>
                  <Link href="/login" legacyBehavior>
                    <a className={styles.linkName}>Sign Out</a>
                  </Link>
                  <div className={styles.lineWrapper}></div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
