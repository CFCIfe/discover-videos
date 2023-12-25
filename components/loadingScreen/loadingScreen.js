import styles from "./loadingScreen.module.css";

const LoadingScreen = () => {
  return (
    <div>
      <div className={styles.loadingScreen}>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
