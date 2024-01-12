import TeamCard from "../../components/TeamCard/TeamCard";
import styles from "./Team.module.scss";
import tech from "../../data/tech.json";
// import core23 from "../../data/core22-23.json";
import core24 from "../../data/core23-24.json";

import {useState} from "react";
const Team = () => {


  // document.getElementsByClassName(`${styles.tag}`).map((item)=>{
  //   item.addEventListener("click", setTeam(core24));
  // })

  const [team, setTeam] = useState(core24);
  const coreTeam = () => {
    setTeam(core24);
  };
  const techTeam = () => {
    setTeam(tech);
  };
  console.log(tech);
  return (
    <div className={styles.Team}>
      <h2>Meet the Team</h2>
      <div className={styles.secretary}>
        <div className={styles.title}>SECRETARY</div>
        <TeamCard name="Name" designation="Secretary" insta={"https://google.com"} />
      </div>
      <div className={styles.tagDiv}>
        <div onClick={coreTeam} className={`${styles.tag} ${styles.core}`}>
          Core Team
        </div>
        <div onClick={techTeam} className={styles.tag}>
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
                console.log(member);
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
