/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styles from './Gallery_Card.module.scss';
import { Icon } from '@iconify/react';
// import {Proptypes} from 'prop-types';

const Gallery_Card = (props) => {
    return ( 
        <div className={styles.card}>
            <img src={props.image} alt="" />
            <div className={styles.desc}>
                <h3>{`${props.name}`}</h3>
                <p>{props.desc}</p>
                <Link to={`/gallery/${props.name}`} className={styles.more}><Icon icon="solar:arrow-right-bold" /></Link>
            </div>
        </div>
     );
}

// Gallery_Card.propTypes = {
//     name: Proptypes.string
// }
 
export default Gallery_Card;