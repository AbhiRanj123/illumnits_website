import EventCard from './EventCard/EventCard';
import styles from './EventGallery.module.scss';
// import {Proptypes} from 'prop-types';
import { useParams } from 'react-router-dom';
import data from "../../data/event_gallery.json"

const EventGallery = () => {
    const {name} = useParams();
    console.log(name);
    return ( 
        <div className={styles.Gallery}>
            <h2>{name}</h2>
            <div className={styles.galleryContainer}>
                {
                    data.map((event) => {
                     return event.image && event.name===name ?  <EventCard key={event.id} image={event.image} /> :  null
                    })
                
                }
            </div>
        </div>
     );
}

// EventGallery.propTypes = {
//     name: Proptypes.string
// }
export default EventGallery;