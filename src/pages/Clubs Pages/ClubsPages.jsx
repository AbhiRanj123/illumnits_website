// import React from 'react'
// import { useParams } from 'react-router-dom';

// const Assamese = () => {
//   const { clubName } = useParams();
//   return (
//     <div>
//       {clubName && <h2>{clubName} Details:</h2>}
//       Add club-specific content/details here
//     </div>

//   )
// }

// export default Assamese
import React from "react";
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import "./ClubsPages.scss";
import clubDetailsData from "../../data/ClubDetails.json";

const ClubsPages = () => {
  const {clubName} = useParams();
  const [clubDetails, setClubDetails] = useState(null);

  useEffect(() => {
    // Find the club in the array that matches the given clubname
    const foundClub = clubDetailsData.find((club) => club.clubName === clubName);
    // Set club details if the club is found
    if (foundClub) {
      setClubDetails(foundClub);
    }
  }, [clubName]);
  // console.log(clubDetails)

  const renderTextWithLineBreaks = (text) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <div className="club-details-container">
      {clubDetails && (
        <>
          <div
            className="club-card-0"
            style={{backgroundImage: `url(${clubDetails.ImageURL})`}}
          >
            <div className="innerDiv">
              <p className="club-card-0-heading">{clubName}</p>
              <div className="club-card-0-info">
                <p className="club-card-0-text-detail">{clubDetails.description}</p>
              </div>
            </div>
          </div>

          <div className="club-card-1">
            <div className="club-card-1-left">
              <img className="image" src={clubDetails.section1.image} />
            </div>
            <div className="club-card-1-right">
              <p className="club-card-1-right-heading">{clubDetails.section1.heading}</p>
              <p className="club-card-1-right-info">{renderTextWithLineBreaks(clubDetails.section1.paragraph)}</p>
            </div>
          </div>

          <div className="club-card-2">
            <div className="club-card-2-left">
              <p className="club-card-2-left-info">{clubDetails.section2.paragraph}</p>
            </div>
            <div className="club-card-2-right">
              <img className="image" src={clubDetails.section2.image} />
            </div>
          </div>

          <div className="club-card-3">
            <div className="club-card-3-top">
              <p className="club-card-3-top-heading">{clubDetails.section3.heading}</p>
              <p className="club-card-3-top-info">{clubDetails.section3.paragraph}</p>
            </div>
            <div className="club-card-3-bottom">
              <img src={clubDetails.section3.image} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ClubsPages;
