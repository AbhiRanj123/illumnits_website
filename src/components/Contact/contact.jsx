import './contact.css';
import image from "../../assets/images/bi.png";
const Contact = () => {
  return (
    <div className="Contact-box" style={{image}}>
   
      <h2>Contact Us</h2>
      <p>Feel free to contact us at anytime. We will get back to you as soon as we can</p>
      <form action="" className="container">
        <input type="text" placeholder="Name"  />
        <input type="text" placeholder="Email"  />
        <input type="text" placeholder="Phone(optional)"  />
        <input type="text" placeholder=' Your Message'/>
        <input type="text" />
      </form>
      <button>
        Send
      </button>
    </div>
  );
};

export default Contact;