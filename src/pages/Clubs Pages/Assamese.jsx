// import React from 'react'
import { useParams } from 'react-router-dom';

const Assamese = () => {
  const { clubName } = useParams();
  return (
    <div>
      {clubName && <h2>{clubName} Details:</h2>}
      {/* Add club-specific content/details here */}
    </div>

  )
}

export default Assamese