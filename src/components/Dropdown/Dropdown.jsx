/* eslint-disable react/prop-types */
import { Icon } from '@iconify/react';
import styles from "./Dropdown.module.scss";
import { useState } from 'react';

function Dropdown(props) {

    const [selected,setSelected]=useState(props.option1)
    const toggleOptions=()=>{
        document.getElementsByClassName(styles.options)[0].classList.toggle(styles.showOptions);
    }
    const handleOption1=()=>{
        setSelected(props.option1);
        toggleOptions();
        props.option1Click();
    }
    const handleOption2=()=>{
        setSelected(props.option2)
        toggleOptions();
        props.option2Click();
    }

  return (
   <div className={styles.Dropdown}>
    <div onClick={toggleOptions} className={styles.selected}>{selected }<Icon className={styles.icon} icon="gridicons:dropdown"  color="brown" /></div>
    
   <div className={styles.options}>
   <div className={styles.option} onClick={handleOption1} >{props.option1}</div>
    <div className={styles.option} onClick={handleOption2} >{props.option2}</div>
   </div>
   </div>
  );
}

export default Dropdown;
