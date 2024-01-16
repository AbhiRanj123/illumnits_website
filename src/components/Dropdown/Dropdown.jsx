/* eslint-disable react/prop-types */
import { Icon } from '@iconify/react';
import styles from "./Dropdown.module.scss";

function Dropdown(props) {

    const toggleOptions=()=>{
        document.getElementsByClassName(styles.options)[0].classList.toggle(styles.showOptions);
    }
    const handleOption1=()=>{
        toggleOptions();
        props.option1Click();
    }
    const handleOption2=()=>{
        toggleOptions();
        props.option2Click();
    }

  return (
   <div className={styles.Dropdown}>
    <div onClick={toggleOptions} className={styles.selected}>Core Team<Icon className={styles.icon} icon="gridicons:dropdown"  color="brown" /></div>
    
   <div className={styles.options}>
   <div className={styles.option} onClick={handleOption1} >{props.option1}</div>
   <hr />
    <div className={styles.option} onClick={handleOption2} >{props.option2}</div>
   </div>
   </div>
  );
}

export default Dropdown;
