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
// import React from "react";
import { useParams } from 'react-router-dom';
import "./ClubsPages.scss";

const ClubsPages = () => {
  const { clubName } = useParams();
  return (
    <div className="mainContainer">
      <div className="club-card">
        <div className="club-content">
          <p className="club-name">{clubName}</p>
          <div className="details-info">
            <p className="commas">“</p>
            <p className="text-detail">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
            <p className="commas">”</p>
          </div>
        </div>
      </div>

      <div className="image-text-1">
        <div className="card-left">
          <img
            className="image"
            src="https://th.bing.com/th/id/OIP.iAhcp6m_91O-ClK79h8EQQHaFj?rs=1&pid=ImgDetMain"
          />
        </div>
        <div className="card-right">
          <p className="card-right-heading">
            Lorem ipsum dolor sit amet, consec
          </p>
          <p className="card-right-info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      <div className="image-text-2">
        <div className="info-left">
          <p className="card-info-right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis
          </p>
        </div>
        <div className="info-right">
          <img
            className="image-left"
            src="https://th.bing.com/th/id/OIP.iAhcp6m_91O-ClK79h8EQQHaFj?rs=1&pid=ImgDetMain"
          />
        </div>
      </div>

      <div className="lorem-card">
        <div className="lorem-card-component">
          <p className="lorem-heading">Lorem ipsum dolor sit amet</p>
          <p className="lorem-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo.
          </p>
        </div>
      </div>

      <div className="lower-image">
        <img src="https://th.bing.com/th/id/OIP.iAhcp6m_91O-ClK79h8EQQHaFj?rs=1&pid=ImgDetMain" />
      </div>
    </div>
  );
}

export default ClubsPages;
