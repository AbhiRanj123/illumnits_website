import Card from "./Card/Card";
import "./Contributions.scss";

const Contribution = () => {
  return (
    <div className="contribution-section">
      <div className="contribution-box">
        <h2 className="contribution-box__title">Contributions</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta perferendis,
          repudiandae reprehenderit temporibus eos culpa aliquid quisquam. Quibusdam,
          recusandae suscipit!
        </p>

        <div className="card-container">
          <Card index={0} />

          <Card index={1} />
        </div>
      </div>
    </div>
  );
};

export default Contribution;
