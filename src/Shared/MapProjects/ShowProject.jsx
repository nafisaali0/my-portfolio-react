import git from '../../assets/github1.svg'
import link from '../../assets/link.svg'
import PropTypes from 'prop-types';

const ShowProject = ({ project }) => {
    const { project_name, description, github_link, live_link, language_one, language_two, image } = project
    return (
        <>
            <div className='flex gap-10 items-start flex-col lg:flex-row bg-white px-5 py-10 rounded-3xl'>
                <div>
                    <img className='w-full h-full' src={image} alt="" />
                </div>
                {/* className='bg-gray-300' */}
                <div>
                    <div className='flex items-center justify-center text-center'>
                        <div className='w-full lg:w-2/4'>
                            <h2 className='text-3xl text-[#174984] font-bold'>{project_name}</h2>
                            <p className='my-3 text-xl'>{description}</p>
                            <div className='flex gap-5 items-center justify-center my-3'>
                                <p className='drop-shadow-sm rounded-lg text-black font-semibold hover:text-[#174984] hover:font-bold cursor-pointer'>{language_one}</p>
                                <p className='drop-shadow-sm rounded-lg text-black font-semibold hover:text-[#174984] hover:font-bold cursor-pointer'>{language_two}</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-2 items-center justify-center'>
                        <a href={live_link} target="_blank" rel="noreferrer">
                            <button className='px-5 py-2 rounded-sm border-2 border-[#174984] text-[#174984] font-bold drop-shadow-sm flex gap-2 items-center'>
                                Live Link
                                <span>
                                    <img className='w-[20px] h-[20px] text-white' src={link} alt="" />
                                </span>
                            </button>
                        </a>
                        <a href={github_link} target="_blank" rel="noreferrer">
                            <button className='px-5 py-2 rounded-sm border-2 border-[#174984] text-[#174984] font-bold drop-shadow-sm flex gap-2 items-center'>
                                Code
                                <span>
                                    <img className='w-[20px] h-[20px] text-white' src={git} alt="" />
                                </span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

ShowProject.propTypes = {
    project: PropTypes.obj
};

export default ShowProject;