import Lottie from "lottie-react";
import animation from '../../../public/animation.json'
import bg from '../../assets/background/wave.svg'
const About = () => {
    return (
        <div  style={{ backgroundImage: `url(${bg})`,backgroundPosition:'center',backgroundRepeat:'no-repeat', backgroundSize:'cover' }}>
            <div className="container mx-auto my-20 p-5">
                <div className="flex justify-between items-center flex-col-reverse md:flex-row">
                    <div>
                        <h2 className="font-bold text-3xl text-[#174984]">About ME</h2>
                        <p className="my-4">
                            As a frontend developer, my expertise lies in creating seamless and intuitive user experiences. I specialize in using cutting-edge technologies to produce high-quality web applications. Specifically, I have vast knowledge of ReactJS and NodeJS, which allow me to build complex and dynamic applications with ease.
                        </p>
                        <a href="cv.pdf" download={"resume.pdf"}><button className="px-3 py-3 rounded-md text-white bg-[#174984]">Download Resume</button></a>
                    </div>
                    <div>
                        <Lottie loop="true" animationData={animation} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;