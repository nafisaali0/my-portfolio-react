import image from '../../assets/mypic.jpg'
import Skills from './../Skills/Skills';
import github from '../../assets/github1.svg'
import linkedin from '../../assets/linkedin1.svg'
import faccebook from '../../assets/facebook1.svg'


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
                                <a href=""><img className='w-[30px] h-[30px]' src={github} alt="" /></a>
                                <a href=""><img className='w-[30px] h-[30px]' src={linkedin} alt="" /></a>
                                <a href=""><img className='w-[30px] h-[30px]' src={faccebook} alt="" /></a>
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