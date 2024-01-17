import { Link } from "react-router-dom";
import styles from "./LPL.module.scss"

const Lpl=()=>{
    return (
        <div className={styles.LPL}>
            <h1>
                ILLUMINITS
            </h1>
            <h3>Presents</h3>
            <p className={styles.title}>Literary Premiere League</p>
           <div className={styles.date}>
            <div ><span className={styles.dateNum}>18</span> | <span>19</span> | <span className={styles.dateNum}>20</span> | <span>21</span></div>
            <div>January 24</div>
           </div>
           <Link to="https://drive.google.com/file/d/178M5S7-MQx-QwPxFFmbczzgu4sogalER/view?usp=sharing"><div className={styles.more}>Download Brochure</div></Link>
        </div>
    );
}

export default Lpl;