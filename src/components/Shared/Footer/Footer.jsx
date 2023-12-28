// import React from 'react';
import styles from "./Footer.module.scss";
import {Icon} from "@iconify/react";
import {Link} from "react-router-dom";

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
      <div className={styles.divsecond}>
        <div className={styles.illuminitesLogo}>
          <img
            src="https://imgv3.fotor.com/images/gallery/Cartoon-Male-Headshot.jpg"
            alt=""
          />
        </div>
        <div className={styles.heading}>
          <p>ILLUMINITS</p>
        </div>
        <div className={styles.socialmedia}>
          <div>
            <Icon icon="gg:facebook" color="white" width="2rem" />
          </div>
          <div>
            <Icon icon="mdi:instagram" color="white" width="2rem" />
          </div>
          <div>
            <Icon icon="ri:linkedin-fill" color="white" width="2rem" />
          </div>
        </div>
      </div>
      <div className={styles.divthird}>
        <h3>Sitemap</h3>
        <Link to="/">
          <div className={styles.pages}>Home</div>
        </Link>
        <Link to="/about">
          <div className={styles.pages}>About</div>
        </Link>
        <Link to="/events">
          <div className={styles.pages}>Events</div>
        </Link>
        <Link to="/gallery">
          <div className={styles.pages}>Gallery</div>
        </Link>
        <Link to="/teams">
          <div className={styles.pages}>Teams</div>
        </Link>
        <Link to="/clubs">
          <div className={styles.pages}>Clubs</div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
