// import {useState} from "react";
import "./Card.scss";

const Card = () => {
  //   const [more, setMore] = useState(false);
  //   const handleMore = () => {
  //     // !more && document.querySelector(".initial").classList.toggle("moveOut");
  //     // more && document.querySelector(".desc").classList.toggle("moveOut");
  //     setTimeout(() => {
  //       setMore(!more);
  //     }, 0);
  //   };
  return (
    <div className="contri-card">
      <div className="hover-card desc">
        <div className="cross">{/* <span onClick={handleMore}>&#10005;</span> */}</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, molestias.
      </div>

      <div className="contri-card initial">
        <div className="card-icon">
          <img
            src="https://res.cloudinary.com/dxiwtrjjl/image/upload/f_auto,q_auto/v1/Illuminits/djijw7ynodwjq1yc8pts"
            alt=""
          />
        </div>
        <div className="contri-title">Contribution Title</div>
        {/* <div onClick={handleMore} className="more-btn">
            Know More
          </div> */}
      </div>
    </div>
  );
};

export default Card;
