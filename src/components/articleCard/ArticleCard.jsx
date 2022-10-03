import "./articleCard.css";

const ArticleCard = ({ img, author, title, content }) => (
 <article className="card">
  <img src={img} alt="card__image" />
  <div className="card__body">
   <span className="tag">{author}</span>
   <h5>{title}</h5>
   <p>{content}</p>
  </div>
 </article>
);

export default ArticleCard;
