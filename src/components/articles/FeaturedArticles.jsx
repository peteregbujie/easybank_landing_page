import { ArticlesData } from "../../constants";
import ArticleCard from "../articleCard/ArticleCard";
import "./articles.css";

const FeaturedArticles = () => (
 <section className="bg__gray">
  <div className="section__wrapper paddingX">
   <h2 className="heading">Latest Articles</h2>

   <div className="articles ">
    {ArticlesData.map((article, index) => (
     <ArticleCard key={article.title} {...article} index={index} />
    ))}
   </div>
  </div>
 </section>
);

export default FeaturedArticles;
