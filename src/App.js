import "./App.css";
import { Hero, Navbar } from "./components";

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
  </div>
 );
}

export default App;
