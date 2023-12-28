import {Link} from "react-router-dom";
import {Icon} from "@iconify/react";
import logo from "../../../assets/images/logo.svg";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.infoBox}>
          <div className={styles.info}>
            <div className={styles.icon}>
              <Icon width={40} icon="zondicons:location" color="#785140" />
            </div>
            <div className={styles.content}>
              <Link>NIT Silchar,Silchar Assam,India-788010</Link>
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles.icon}>
              <Icon width={40} icon="tabler:mail-filled" color="#785140" />
            </div>
            <div className={styles.content}>
              <Link to="mailto:illuminits@gmail.com">illuminits@gmail.com</Link>
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles.icon}>
              <Icon width={40} icon="ion:call" color="#785140" />
            </div>
            <div className={styles.content}>
              <Link to="calto:9845275678">9845275678</Link>
            </div>
          </div>
        </div>
        <div className={styles.social}>
          <img src={logo} alt="" />

          <div className={styles.heading}>
            <h3>Illuminites</h3>
          </div>
          <div className={styles.icons}>
            <Link
              to="https://www.instagram.com/illuminits?igsh=YTQwZjQ0NmI0OA=="
              className={styles.icon}
            >
              <Icon width={40} icon="akar-icons:instagram-fill" color="#fff" />
            </Link>
            <Link
              to="https://www.facebook.com/Illuminits?mibextid=kFxxJD"
              className={styles.icon}
            >
              <Icon width={40} icon="akar-icons:facebook-fill" color="#fff" />
            </Link>
            {/* <Link to="" className={styles.icon}>
            <Icon width={40} icon="akar-icons:linkedin-fill" color="#fff" />
          </Link> */}
          </div>
        </div>
        <div className={styles.links}>
          <h3>Sitemap</h3>

          <div className={styles.linksBox}>
            <Link to="/">Home</Link>
            <Link to="">About</Link>
            <Link to="/events">Events</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/team">Team</Link>
            <Link to="/contact">Contact</Link>
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
