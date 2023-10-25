import About from "../../Shared/About/About";
import Contact from "../../Shared/Contact/Contact";
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
        </div>
    );
};

export default Home;