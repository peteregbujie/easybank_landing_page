import "./App.css";
import { FeaturedArticles, FeaturedServices, Hero, Navbar } from "./components";

function App() {
 return (
  <div className="main">
   <head>
    <meta
     name="viewport"
     content="width=device-width, initial-scale=1, maximum-scale=1"
    ></meta>
   </head>
   <Navbar />
   <Hero />
   <FeaturedServices />
   <FeaturedArticles />
  </div>
 );
}

export default App;
