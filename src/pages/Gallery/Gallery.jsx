import Gallery_Card from '../../components/GalleryCard/Gallery_Card';
import styles from './Gallery.module.scss';
import data from "../../data/mainGalley.json";

const Gallery = () => {
    return ( 
        <div className={styles.Gallery}>
            <h2>Gallery</h2>
            <div className={styles.galleryContainer}>
                {
                    data.map((item)=>{
                        console
                        return  item.image && <Gallery_Card key={item.id} name={item.name} image={item.image} desc={item.desc} />
                    })
                }



                {/* <Gallery_Card name="LPL" /> */}
                {/* <Gallery_Card/> */}
                {/* <Gallery_Card/> */}

            </div>
        </div>
     );
}
 
export default Gallery;