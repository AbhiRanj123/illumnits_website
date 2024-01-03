import './contact.css';
import image from "../../assets/images/bi.png";
const Contact = () => {
  return (
    <div className="Contact-box" style={{image}}>
   
      <h2>Contact Us</h2>
      <p>Feel free to contact us at anytime. We will get back to you as soon as we can</p>
      <form action="" className="container">
        <input autoComplete='off' required type="text" placeholder="Name"  />
        <input autoComplete='off' required type="text" placeholder="Email"  />
        <input autoComplete='off'  type="text" placeholder="Phone(optional)"  />
        <input autoComplete='off' required type="text" placeholder=' Your Message' />
        <button type='submit' >
        Send
      </button>
      </form>
      
    </div>
  );
};

export default Contact;