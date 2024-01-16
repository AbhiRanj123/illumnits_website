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
           <Link to="/LPL"><div className={styles.more}>Know more</div></Link>
        </div>
    );
}

export default Lpl;