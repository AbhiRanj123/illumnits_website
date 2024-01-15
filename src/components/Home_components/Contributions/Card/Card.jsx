// import {useState} from "react";
import Proptype from "prop-types";
import "./Card.scss";
import { Link } from "react-router-dom";

const Card = (props) => {
  const handleMore = () => {};
  return (
    <div className="contri-card">
      <div className="hover-card desc">{`${props.desc}`}
      <Link to={props.path} onClick={handleMore} className="more-btn">
            Know More
          </Link>
       </div>

      <div className="contri-card initial">
        <div className="card-icon">
          <img
            src="https://res.cloudinary.com/dxiwtrjjl/image/upload/f_auto,q_auto/v1/Illuminits/djijw7ynodwjq1yc8pts"
            alt=""
          />
        </div>
        <div className="contri-title">{`${props.title}`} </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: Proptype.string,
  desc: Proptype.string,
  index: Proptype.number,
  path:Proptype.string
};

export default Card;
