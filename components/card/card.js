import Image from "next/image";
import styles from "./card.module.css";

import { motion } from "framer-motion";
import cls from "classnames";

import { useState } from "react";

const Card = (props) => {
  const {
    imgUrl = "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80",
    size = "medium",
  } = props;

  const [imgSrc, setImgSrc] = useState(imgUrl);

  const handleOnError = () => {
    console.log("Error Fallback");
    setImgSrc(
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80"
    );
  };

  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };
  return (
    <div className={styles.container}>
      Card {`${size}`}
      <motion.div
        whileHover={{ scale: 1.2 }}
        className={cls(styles.imgMotionWrapper, classMap[size])}
      >
        <Image
          src={imgSrc}
          alt={`Card Image ${size}`}
          layout="fill"
          onError={handleOnError}
          className={styles.cardImg}
        />
      </motion.div>
    </div>
  );
};

export default Card;
