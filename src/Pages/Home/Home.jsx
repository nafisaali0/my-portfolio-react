import About from "../../Shared/About/About";
import Contact from "../../Shared/Contact/Contact";
import Footer from "../../Shared/Footer/Footer";
import MapProjects from "../../Shared/MapProjects/MapProjects";
import NavBar from "../../Shared/NavBar/NavBar";
import Banner from './../../Shared/Banner/Banner';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <MapProjects></MapProjects>
            <About></About>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;