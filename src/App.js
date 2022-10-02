import "./App.css";
import { Hero, Navbar } from "./components";
import Features from "./components/features/Features";

function App() {
 return (
  <div>
   <head>
    <meta
     name="viewport"
     content="width=device-width, initial-scale=1, maximum-scale=1"
    ></meta>
   </head>
   <Navbar />
   <Hero />
   <Features />
  </div>
 );
}

export default App;
