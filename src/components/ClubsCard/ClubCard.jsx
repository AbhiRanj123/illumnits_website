/* eslint-disable react/prop-types */
// import {useState} from "react";
// import {Link} from "react-router-dom";
import styles from "./ClubCard.module.scss";
import {Icon} from "@iconify/react";

const ClubCard = (props) => {
  return (
    <div className={styles.divContainer}>
      <div className={styles.mainDiv}>
        <div className={styles.number}>{props.index}</div>
        <div className={styles.midllediv}>
          <div className={styles.heading}>{props.name}</div>
          <div className={styles.description}>{props.desc}</div>
        </div>
        <div className={styles.arrowicon}>
          <Icon icon="ep:arrow-up" rotate={1} />
        </div>
      </div>
    </div>
  );
};

export default ClubCard;
