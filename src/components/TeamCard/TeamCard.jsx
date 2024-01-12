/* eslint-disable react/prop-types */
import {Link} from "react-router-dom";
import styles from "./TeamCard.module.scss";
import {Icon} from "@iconify/react";

const TeamCard = (props) => {
  return (
    <div className={styles.card}>
      <img src={props.img} alt="" />
      <div className={styles.info}>
        <span className={styles.name}>{props.name} </span>
      </div>
      <div className={styles.socials}>
          {props.insta && <Link to={props.insta} target="_blank">
            <Icon icon="skill-icons:instagram" color="white" height="25" />
          </Link>}
          {props.facebook && <Link to={props.facebook} target="_blank">
            {" "}
            <Icon icon="logos:facebook" color="white" height="25" />
          </Link>}
          {props.linkedin && <Link to={props.linkedin} target="_blank">
            {" "}
            <Icon icon="devicon:linkedin" color="white" height="25" />
          </Link>}
        </div>
    </div>
  );
};

export default TeamCard;
