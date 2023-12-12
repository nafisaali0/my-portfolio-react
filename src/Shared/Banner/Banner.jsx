import image from '../../assets/profile_pic/mypic-removebg.png'
import Skills from './../Skills/Skills';
import github from '../../assets/icons/github1.svg'
import linkedin from '../../assets/icons/linkedin1.svg'
import faccebook from '../../assets/icons/facebook1.svg'
import file from '../../assets/icons/resume1.svg'
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <>
            <div className="bg-[#f9f9f9] py-32 px-3">
                <div className='container mx-auto overflow-hidden mt-5'>
                    <div className='flex gap-5 md:justify-between  items-center flex-col-reverse md:flex-row'>
                        <div className='md:flex-1'>
                            <div className='w-full lg:w-4/6 md:text-left text-center'>
                                <h1 className='text-4xl md:text-5xl font-bold text-[#174984]'>Front-End Developer</h1>
                                <p className='my-5 text-2xl'>
                                    Hi, I am Nafisa Ali. A passionate Front-end React Developer based in Dhaka, Bangladesh.
                                </p>
                            </div>
                            <div className='flex gap-1 items-center flex-wrap justify-center md:justify-start'>
                                <Link href=""><img className='w-[30px] h-[30px]' src={github} alt="" /></Link>
                                <Link href=""><img className='w-[30px] h-[30px]' src={linkedin} alt="" /></Link>
                                <Link href=""><img className='w-[30px] h-[30px]' src={faccebook} alt="" /></Link>
                                <a href="cv.pdf" download={"resume.pdf"}><img className='w-[30px] h-[30px]' src={file} alt="" /></a>
                            </div>
                        </div>
                        <div className='md:flex-1 flex justify-end'>
                            <img
                                className='lg:w-[350px] lg:h-[350px] md:w-[200px] md:h-[200px] rounded-full ' src={image} alt="" />
                        </div>
                    </div>
                </div>
                <Skills></Skills>
            </div>
        </>
    );
};

export default Banner;