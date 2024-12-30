// import { useState } from "react";
// import TeamCard from "../../components/TeamCard/TeamCard";
// import styles from "./Team.module.scss";
// import tech from "../../data/tech.json";
// import core23 from "../../data/core22-23.json";
// import core24 from "../../data/core23-24.json";
// import core25 from "../../data/core24-25.json"; // Ensure this file exists

// import Dropdown from "../../components/Dropdown/Dropdown";

// const Team = () => {
//   // Initialize the team with core25 as default
//   const [team, setTeam] = useState(core25);

//   // Function to highlight the Core Team tab
//   const coreTeam = () => {
//     document.getElementsByClassName(styles.tech)[0].classList.remove(styles.activeTag);
//     document.getElementsByClassName(styles.core)[0].classList.add(styles.activeTag);
//   };

//   // Function to show the Tech Team
//   const techTeam = () => {
//     setTeam(tech);
//     document.getElementsByClassName(styles.core)[0].classList.remove(styles.activeTag);
//     document.getElementsByClassName(styles.tech)[0].classList.add(styles.activeTag);
//   };

//   // Functions to set the team data for each year
//   const set25 = () => {
//     setTeam(core25); // Set team to Core 2024-25
//   };

//   const set24 = () => {
//     setTeam(core24); // Set team to Core 2023-24
//   };

//   const set23 = () => {
//     setTeam(core23); // Set team to Core 2022-23
//   };

//   return (
//     <div className={styles.Team}>
//       <h2>Meet the Team</h2>
//       <div className={styles.secretary}>
//         <div className={styles.title}>SECRETARY</div>
//         <TeamCard
//           name="Rajan Kumar "
//           designation="Secretary"
//           insta="https://www.instagram.com/rajan_08_?igsh=d3FyMDFrcDUxZG5v"
//           facebook="https://www.facebook.com/profile.php?id=100086540867023"
//           linkedin="https://www.linkedin.com/in/rajan-kumar-446167244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
//           img="https://res.cloudinary.com/duqavhkag/image/upload/v1735491243/IMG_20240807_170018452_-_CE_131_RAJAN_jl3gid.jpg"
//         />
//       </div>
//       <div className={styles.tagDiv}>
//         <div onClick={coreTeam} className={`${styles.tag} ${styles.core} ${styles.activeTag}`}>
//           <Dropdown
//             option1="Core Team(2024-25)"
//             option2="Core Team(2023-24)"
//             option3="Core Team(2022-23)"
//             option1Click={set25}
//             option2Click={set24}
//             option3Click={set23}
//           />
//         </div>
//         <div onClick={techTeam} className={`${styles.tag} ${styles.tech}`}>
//           Tech Team
//         </div>
//       </div>
//       <div className={styles.teamContainer}>
//         {team.map((item) => {
//           return (
//             <div key={item.id} className={styles.innerContainer}>
//               <h2>{item.Team}</h2>
//               <div className={styles.cardCont}>
//                 {item.Members.map((member) => {
//                   return (
//                     <TeamCard
//                       key={member.id}
//                       name={member.name}
//                       designation={member.designation}
//                       insta={member.insta}
//                       facebook={member.facebook}
//                       linkedin={member.Linkedin}
//                       github={member.github}
//                       img={member.image}
//                     />
//                   );
//                 })}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Team;



// import { useState } from "react";
// import TeamCard from "../../components/TeamCard/TeamCard";
// import styles from "./Team.module.scss";
// import tech23 from "../../data/tech23-24.json"; // Ensure this file exists
// import tech24 from "../../data/tech24-25.json"; // Ensure this file exists
// import core23 from "../../data/core22-23.json";
// import core24 from "../../data/core23-24.json";
// import core25 from "../../data/core24-25.json"; // Ensure this file exists

// import Dropdown from "../../components/Dropdown/Dropdown";

// const Team = () => {
//   // Initialize the team with core25 as default
//   const [team, setTeam] = useState(core25);

//   // Function to highlight the Core Team tab
//   const coreTeam = () => {
//     document.getElementsByClassName(styles.tech)[0].classList.remove(styles.activeTag);
//     document.getElementsByClassName(styles.core)[0].classList.add(styles.activeTag);
//   };

//   // Function to show the Tech Team
//   const techTeam = () => {
//     setTeam(tech24); // Set default tech team to 2024-2025
//     document.getElementsByClassName(styles.core)[0].classList.remove(styles.activeTag);
//     document.getElementsByClassName(styles.tech)[0].classList.add(styles.activeTag);
//   };

//   // Functions to set the team data for each year for Core
//   const set25 = () => {
//     setTeam(core25); // Set team to Core 2024-25
//   };

//   const set24 = () => {
//     setTeam(core24); // Set team to Core 2023-24
//   };

//   const set23 = () => {
//     setTeam(core23); // Set team to Core 2022-23
//   };

//   // Functions to set the team data for each year for Tech
//   const setTech25 = () => {
//     setTeam(tech25); // Set Tech team to Tech 2024-25
//   };

//   const setTech24 = () => {
//     setTeam(tech24); // Set Tech team to Tech 2023-24
//   };


//   return (
//     <div className={styles.Team}>
//       <h2>Meet the Team</h2>
//       <div className={styles.secretary}>
//         <div className={styles.title}>SECRETARY</div>
//         <TeamCard
//           name="Rajan Kumar "
//           designation="Secretary"
//           insta="https://www.instagram.com/rajan_08_?igsh=d3FyMDFrcDUxZG5v"
//           facebook="https://www.facebook.com/profile.php?id=100086540867023"
//           linkedin="https://www.linkedin.com/in/rajan-kumar-446167244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
//           img="https://res.cloudinary.com/duqavhkag/image/upload/v1735491243/IMG_20240807_170018452_-_CE_131_RAJAN_jl3gid.jpg"
//         />
//       </div>
//       <div className={styles.tagDiv}>
//         <div onClick={coreTeam} className={`${styles.tag} ${styles.core} ${styles.activeTag}`}>
//           <Dropdown
//             option1="Core Team(2024-25)"
//             option2="Core Team(2023-24)"
//             option3="Core Team(2022-23)"
//             option1Click={set25}
//             option2Click={set24}
//             option3Click={set23}
//           />
//         </div>
//         <div onClick={techTeam} className={`${styles.tag} ${styles.tech}`}>
//           <Dropdown
//             option1="Tech Team(2024-25)"
//             option2="Tech Team(2023-24)"
//             option1Click={setTech25}
//             option2Click={setTech24}
//           />
//         </div>
//       </div>
//       <div className={styles.teamContainer}>
//         {team.map((item) => {
//           return (
//             <div key={item.id} className={styles.innerContainer}>
//               <h2>{item.Team}</h2>
//               <div className={styles.cardCont}>
//                 {item.Members.map((member) => {
//                   return (
//                     <TeamCard
//                       key={member.id}
//                       name={member.name}
//                       designation={member.designation}
//                       insta={member.insta}
//                       facebook={member.facebook}
//                       linkedin={member.Linkedin}
//                       github={member.github}
//                       img={member.image}
//                     />
//                   );
//                 })}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Team;



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
        {(isCoreSelected ? coreTeam : techTeam).map((item) => (
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
