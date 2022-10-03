import "./service.css";

const Service = ({ title, text, img }) => (
 <div className="featureCard">
  <img src={img} alt="" />
  <h3>{title}</h3>
  <p>{text}</p>
 </div>
);

export default Service;
