import MapProjects from "../../Shared/MapProjects/MapProjects";
import NavBar from "../../Shared/NavBar/NavBar";
import Banner from './../../Shared/Banner/Banner';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <MapProjects></MapProjects>
        </div>
    );
};

export default Home;