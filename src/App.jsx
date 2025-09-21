import gsap from "gsap"
import {ScrollTrigger, SplitText} from "gsap/all"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Cocktails from "./components/Cocktails.jsx";
import About from "./components/About.jsx";
import Footer from "./components/footer.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
    return (
        <main>
            <Navbar/>
            <Hero/>
            <Cocktails/>
            <About/>
            <Footer/>
        </main>
    )
}

export default App