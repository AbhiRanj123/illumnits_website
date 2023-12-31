import Card from "./Card/Card";
import "./Contributions.scss";

const data=[
  {
    id:1,
    title:"Event 1",
    desc:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, maiores."
  },
  {
    id:2,
    title:"Event 2",
    desc:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, maiores."
  },
  {
    id:3,
    title:"Event 3",
    desc:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, maiores."
  },
  {
    id:4,
    title:"Event 4",
    desc:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, maiores."
  }
]

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


          {
            data.map((item)=>{
              return(
                <Card key={item.id} index={item.id} title={item.title} desc={item.desc} />
              )
            })
          }
          {/* <Card index={0} title="kjfgx"  desc=" xffxgc hbv hgfxfxhjmhcb y frd" /> */}

          {/* <Card index={1} /> */}
        </div>
      </div>
    </div>
  );
};

export default Contribution;
