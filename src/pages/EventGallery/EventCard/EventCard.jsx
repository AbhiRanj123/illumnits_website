/* eslint-disable react/prop-types */
import styles from './EventCard.module.scss';
// import {Proptypes } from "prop-types"

const EventCard = (props) => {
    return ( 
        <div className={styles.EventCard}>
            <img src={props.image} alt="Event image" />
        </div>
     );
}

// EventCard.propTypes = {
//     image: Proptypes.string.isRequired
// }
 
export default EventCard;