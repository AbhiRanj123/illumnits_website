// import {useState} from "react";
import Proptype from "prop-types";
import "./Card.scss";



const Card = (props) => {
  return (
    <div className="contri-card">
      <div className="hover-card desc">
        <div className="cross">{/* <span onClick={handleMore}>&#10005;</span> */}</div>
        {`${props.desc}`}{" "}
      </div>

      <div className="contri-card initial">
        <div className="card-icon">
          <img
            src="https://res.cloudinary.com/dxiwtrjjl/image/upload/f_auto,q_auto/v1/Illuminits/djijw7ynodwjq1yc8pts"
            alt=""
          />
        </div>
        <div className="contri-title">{`${props.title}`} </div>
        {/* <div onClick={handleMore} className="more-btn">
            Know More
          </div> */}
      </div>
    </div>
  );
};

Card.propTypes = {
  title: Proptype.string,
  desc: Proptype.string,
  index: Proptype.number,
}


export default Card;
