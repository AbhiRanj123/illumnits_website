import React from "react";
import './ClubInfo.css'
import ClubInfo from "./ClubInfo";
import Entry from "./Entry";

function createEntry(clubInformation) {
    return (
      <Entry
        key={clubInformation.id}
        num={clubInformation.number}
        name={clubInformation.clubName}
        description={clubInformation.clubInf}
      />
    );
  }

function Club (){


    return(
        <div>
            <span>Clubs</span>
            <div>
                {ClubInfo.map(createEntry)};
            </div>
        </div>
    );
}

export default Club;