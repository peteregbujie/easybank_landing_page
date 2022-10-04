import "./App.css";
import {
 FeaturedArticles,
 FeaturedServices,
 Footer,
 Hero,
 Navbar,
} from "./components";

function App() {
 return (
  <div>
   <Navbar />
   <main>
    <Hero />
    <FeaturedServices />
    <FeaturedArticles />
   </main>
   <Footer />
  </div>
 );
}

export default App;
