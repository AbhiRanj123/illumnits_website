// import React from 'react'
import {Link} from "react-router-dom";
import styles from "./Clubs.module.scss";

const Clubs = () => {
  const clubs = [
    {name: "English Literature Club", description: "Description for ClubA"},
    {name: "Hindi Sahitya Samithi", description: "Description for ClubB"},
    {name: "Marwaadi Club", description: "Description for ClubC"},
    {name: "Assamese Literature Club", description: "Description for ClubA"},
    {name: "ClubBengali Literaute ClubB", description: "Description for ClubB"},
    {name: "Telugu and Tamil Literature Club", description: "Description for ClubC"},
    {name: "Digital Arts Club", description: "Description for ClubA"},
    {name: "Fine Arts Club", description: "Description for ClubB"},
    {name: "CluJournalism Club", description: "Description for ClubC"},
    {name: "Publication Club", description: "Description for ClubC"},
  ];
  return (
    <div className={styles.Container}>
      {/* <h2>Select a Club:</h2> */}

      <div className={styles.heading}>Clubs</div>
      <hr />
      <div className={styles.ContainerClub}>
        {clubs.map((club) => (
          <div key={club} className={styles.ClubsComponent}>
            <div className={styles.ClubsName}>
              <Link to={`/clubs/${club}`}>{club.name}</Link>
            </div>

            <div className={styles.ClubsDescription}>
              <p>{club.description}</p>
            </div>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default Clubs;
