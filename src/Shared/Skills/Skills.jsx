import html from '../../assets/html-5.svg'
import css from '../../assets/css3.svg'
import js from '../../assets/javascript.svg'
import reacts from '../../assets/react1.svg'
import expres from '../../assets/express.png'
import mongo from '../../assets/mongodb.svg'


const Skills = () => {
    return (
        <div className="container mx-auto overflow-hidden">
            <div className='flex items-center gap-5 flex-col md:flex-row'>
                <div className='px-4 py-3 border-black hidden md:flex border-r-2'>
                    <h2 className='text-xl text-[#174984] font-bold md:-ml-3'>Tech Stack</h2>
                </div>
                <div className='px-4 py-3  border-black border-b-2 flex md:hidden'>
                    <h2 className='text-xl text-[#174984] font-bold md:-ml-3'>Tech Stack</h2>
                </div>
                <div className=''>
                    <div className='flex items-center gap-2 md:gap-5 p-2'>
                        <div className='flex items-center'>
                            <img className='w-[50px] h-[50px]' src={html} alt="" />
                            <img className='w-[50px] h-[50px]' src={css} alt="" />
                            <img className='w-[50px] h-[43px]' src={js} alt="" />
                        </div>
                        <div className='flex items-center gap-2'>
                            <img className='w-[50px] h-[50px] rounded-full' src={reacts} alt="" />
                            <img className='w-[50px] h-[50px]' src={expres} alt="" />
                            <img className='w-[50px] h-[50px]' src={mongo} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;