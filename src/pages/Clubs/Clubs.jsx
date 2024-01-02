// import React, {useState} from 'react'
import {Link} from "react-router-dom";
import ClubCard from "../../components/ClubsCard/ClubCard.jsx";
import clubs from "../../data/ClubCard.json";
import styles from "./Clubs.module.scss";

const Clubs = () => {
  
  return (
    <div className={styles.Container}>
      {/* <h2>Select a Club:</h2> */}

      <div className={styles.heading}>Clubs</div>
      <div className={styles.ContainerClub}>
        {clubs.map((club) => (
          <div key={club} className={styles.ClubsComponent}>
            <div className={styles.ClubsName}>
              <Link to={`/clubs/${club.name}`}>
                <ClubCard  key={club.id} name={club.name} desc={club.description}/>
                
                </Link>
              
            </div>

            {/* <div className={styles.ClubsDescription}>
              {club.description}
            </div> */}
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Clubs;
