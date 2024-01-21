import Card from "./Card/Card";
import "./Contributions.scss";

const data=[
  {
    id:1,
    title:"Incandescene",
    desc:" Embark on a journey into the vibrant world of Incandescence, where Illuminits opens its doors to enthusiasts from all walks of life. This annual cultural celebration plays host to two stellar events that capture the essence of intellectual dynamism and creative expression - Deprador and Kaladarshan. ",
    path:"/contribution/incand"
  }
]

const Contribution = () => {
  return (
    <div className="contribution-section">
      <div className="contribution-box">
        <h2 className="contribution-box__title">Contributions</h2>
        <p>
          
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
