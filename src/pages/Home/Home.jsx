import Contact from "../../components/Contact/Contact";
import Howdo from "../../components/Howdo";
import Resume from "../../components/Resume/Resume";
import Skills from "../../components/Skills";
import Portfolio from "../../components/portfolio/Portfolio";
import Services from "../Services/Services";
import Footer from "../SharePages/Footer";
import Banner from "./Banner/Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Howdo></Howdo>
            <Skills></Skills>
            <Portfolio></Portfolio>
            <Resume></Resume>
            <Contact></Contact>
            <Footer></Footer>
        
        </div>
    );
};

export default Home;