import { useState } from "react";
import TeamCard from "../../components/TeamCard/TeamCard";
import Dropdown from "../../components/Dropdown/Dropdown";
import styles from "./Team.module.scss";
import tech23 from "../../data/tech23-24.json";
import tech24 from "../../data/tech24-25.json";
import core23 from "../../data/core22-23.json";
import core24 from "../../data/core23-24.json";
import core25 from "../../data/core24-25.json";

const Team = () => {
  // Initializing states for Core and Tech teams separately
  const [coreTeam, setCoreTeam] = useState(core25); // Default to Core 2024-25
  const [techTeam, setTechTeam] = useState(tech24); // Default to Tech 2024-25
  const [isCoreSelected, setIsCoreSelected] = useState(true); // Tracks whether Core or Tech is selected

  // Core team handlers
  const setCore25Handler = () => setCoreTeam(core25);
  const setCore24Handler = () => setCoreTeam(core24);
  const setCore23Handler = () => setCoreTeam(core23);

  // Tech team handlers
  const setTech25Handler = () => setTechTeam(tech24);
  const setTech23Handler = () => setTechTeam(tech23);

  // Switch to Core team view
  const switchToCore = () => {
    setIsCoreSelected(true);
  };

  // Switch to Tech team view
  const switchToTech = () => {
    setIsCoreSelected(false);
  };

  return (
    <div className={styles.Team}>
      <h2>Meet the Team</h2>

      {/* Secretary Section */}
      <div className={styles.secretary}>
        <div className={styles.title}>SECRETARY</div>
        <TeamCard
          name="Rajan Kumar"
          designation="Secretary"
          insta="https://www.instagram.com/rajan_08_?igsh=d3FyMDFrcDUxZG5v"
          facebook="https://www.facebook.com/profile.php?id=100086540867023"
          linkedin="https://www.linkedin.com/in/rajan-kumar-446167244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          img="https://res.cloudinary.com/duqavhkag/image/upload/v1735491243/IMG_20240807_170018452_-_CE_131_RAJAN_jl3gid.jpg"
        />
      </div>

      {/* Team Type Toggle */}
      <div className={styles.tagDiv}>
        <div
          onClick={switchToCore}
          className={`${styles.tag} ${styles.core} ${isCoreSelected ? styles.activeTag : ""}`}
        >
          <Dropdown
            title="Core Team"
            option1="Core Team (2024-25)"
            option2="Core Team (2023-24)"
            option3="Core Team (2022-23)"
            option1Click={setCore25Handler}
            option2Click={setCore24Handler}
            option3Click={setCore23Handler}
          />
        </div>

        <div
          onClick={switchToTech}
          className={`${styles.tag} ${styles.tech} ${!isCoreSelected ? styles.activeTag : ""}`}
        >
          <Dropdown
            title="Tech Team"
            option1="Tech Team (2024-25)"
            option2="Tech Team (2023-24)"
            option1Click={setTech25Handler}
            option2Click={setTech23Handler}
          />
        </div>
      </div>

      {/* Display Selected Team Members */}
      <div className={styles.teamContainer}>
        {isCoreSelected &&
          coreTeam.map((item) => (
            <div key={item.id} className={styles.innerContainer}>
              <h2>{item.Team}</h2>
              <div className={styles.cardCont}>
                {item.Members.map((member) => (
                  <TeamCard
                    key={member.id}
                    name={member.name}
                    designation={member.designation}
                    insta={member.insta}
                    facebook={member.facebook}
                    linkedin={member.Linkedin}
                    github={member.github}
                    img={member.image}
                  />
                ))}
              </div>
            </div>
          ))}

        {!isCoreSelected &&
          techTeam.map((item) => (
            <div key={item.id} className={styles.innerContainer}>
              <h2>{item.Team}</h2>
              <div className={styles.cardCont}>
                {item.Members.map((member) => (
                  <TeamCard
                    key={member.id}
                    name={member.name}
                    designation={member.designation}
                    insta={member.insta}
                    facebook={member.facebook}
                    linkedin={member.Linkedin}
                    github={member.github}
                    img={member.image}
                  />
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Team;

