// import React from 'react';
import styles from "./Footer.module.scss";
import {Icon} from "@iconify/react";

const Footer = () => {
  return (
    <div className={styles.FooterDiv}>
      <div className={styles.divfirst}>
        <div className={styles.div1}>
          <div className={styles.logo}>
            <Icon icon="mdi:location" color="#6c5a5a" width="2.5rem" />
          </div>
          <div className={styles.address}>
            <p>NIT Silchar, Silchar, Assam, India -788010</p>
          </div>
        </div>
        <div className={styles.div2}>
          <div className={styles.logo}>
            <Icon icon="tabler:mail-filled" color="#6c5a5a" width="2.5rem" />
          </div>
          <div className={styles.address}>
            <p>illuminits@gmai.com</p>
          </div>
        </div>
        <div className={styles.div3}>
          <div className={styles.logo}>
            <Icon icon="carbon:phone-filled" color="#6c5a5a" width="2.5rem" />
          </div>
          <div className={styles.address}>
            <p>9845275678</p>
          </div>
        </div>
      </div>
      <div>
        <div></div>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
