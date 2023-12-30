// import React from 'react'
import { Link } from 'react-router-dom';

const Clubs = () => {
    const clubs = ['English Literature Club', 'Hindi Sahitya Samithi', 'Marwaadi Club'
    ,'Assamese Literature Club','Bengali Literaute Club','Telugu and Tamil Literature Club','Digital Arts Club'
    ,'Fine Arts Club','Journalism Club','Publication Club'];
  return (
    <div>
    {/* <h2>Select a Club:</h2> */}
    Clubs
    <div>
      {clubs.map((club) => (
        <div key={club}>
          <Link to={`/clubs/${club}`}>{club}</Link>
        </div>
      ))}
    </div>
  </div>
      );
}

export default Clubs