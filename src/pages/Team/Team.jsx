import TeamCard from "../../components/TeamCard/TeamCard";
import styles from "./Team.module.scss";
import tech from "../../data/tech.json";
import core23 from "../../data/core22-23.json";
import core24 from "../../data/core23-24.json";

import { useState} from "react";
import Dropdown from "../../components/Dropdown/Dropdown";

const Team = () => {
  // document.getElementsByClassName(`${styles.tag}`).map((item)=>{
  //   item.addEventListener("click", setTeam(core24));
  // })

  const [team, setTeam] = useState(core24);
  const coreTeam = () => {
    document.getElementsByClassName(styles.tech)[0].classList.remove(styles.activeTag);
    document.getElementsByClassName(styles.core)[0].classList.add(styles.activeTag);
  };
  const techTeam = () => {
    setTeam(tech);
    document.getElementsByClassName(styles.core)[0].classList.remove(styles.activeTag);
    document.getElementsByClassName(styles.tech)[0].classList.add(styles.activeTag);
  };

  const set24=()=>{
    setTeam(core24);
  }
  const set23=()=>{
    setTeam(core23);
  }


  return (
    <div className={styles.Team}>
      <h2>Meet the Team</h2>
      <div className={styles.secretary}>
        <div className={styles.title}>SECRETARY</div>
        <TeamCard name="Name" designation="Secretary" insta={"https://google.com"} />
      </div>
      <div className={styles.tagDiv}>
        <div onClick={coreTeam} className={`${styles.tag} ${styles.core} ${styles.activeTag}`}>
        <Dropdown
        option1="Core Team(2023-24)"
        option2="Core Team(2022-23)"
        option1Click={set24}
        option2Click={set23}

        />
        </div>
        <div onClick={techTeam} className={`${styles.tag} ${styles.tech}`}>
          Tech Team
        </div>
      </div>
      <div className={styles.teamContainer}>
        {team.map((item) => {
          return (
            <div key={item.id} className={styles.innerContainer}>
              <h2>{item.Team}</h2>
              <div className={styles.cardCont}>
                {item.Members.map((member) => {
                  return (
                    <TeamCard
                      key={member.id}
                      name={member.name}
                      designation={member.designation}
                      insta={member.insta}
                      facebook={member.facebook}
                      linkedin={member.Linkedin}
                      img={member.image}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
