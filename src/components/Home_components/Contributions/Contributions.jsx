import Card from "./Card/Card";
import "./Contributions.scss";

const data=[
  {
    id:1,
    title:"Incandescene",
    desc:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, maiores.",
    path:"/contribution/incand"
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
                <Card key={item.id} index={item.id} title={item.title} desc={item.desc} path={item.path} />
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
