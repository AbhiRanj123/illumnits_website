/* eslint-disable react/prop-types */
// import {useState} from "react";
// import {Link} from "react-router-dom";
import styles from "./ClubCard.module.scss";
import { Icon } from '@iconify/react';

const ClubCard = (props) => {
  

  return (
    <div className={styles.divContainer}>
      <div className={styles.mainDiv}>
          <div>{props.index}</div>
          <div>
            <div>{props.name}</div>
            <div>{props.desc}</div>
          </div>
          <div><Icon icon="ep:arrow-up" rotate={1} /></div>
        </div>
      
    </div>
  );
};

export default ClubCard;
