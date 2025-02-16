import About from "./about/page";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Projects from "./projects/page";
import SkillsOrbit from "./skills/page";

export default function Home() {
  return (
   <>

<Navbar/>
<Hero/>
<About/>
<Projects/>
<SkillsOrbit/>
   
   </>  );
}
