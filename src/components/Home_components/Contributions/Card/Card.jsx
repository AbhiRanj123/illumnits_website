// import {useState} from "react";
import Proptype from "prop-types";
import "./Card.scss";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="contri-card">
      <div className="hover-card desc">{`${props.desc}`}
      <Link to={props.path}  className="more-btn">
            Know More
          </Link>
       </div>

      <div className="contri-card initial">
        <div className="card-icon">
          
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
