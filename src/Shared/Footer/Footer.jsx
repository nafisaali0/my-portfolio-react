import github from '../../assets/icons/github1.svg'
import linkedin from '../../assets/icons/linkedin1.svg'
import faccebook from '../../assets/icons/facebook1.svg'
import file from '../../assets/icons/resume1.svg'

const Footer = () => {
    return (
        <>
            <footer className="footer p-10 bg-[#174984] text-neutral-content">
                <div className="container mx-auto flex justify-between items-center">
                    <aside>
                        <h2>Nafisa Ali</h2>
                        <p>Email : <a href="#">nafisaali20006@gmail.com</a></p>
                    </aside>
                    <nav>
                        <div className="grid grid-flow-col gap-4" style={{ filter: 'white' }}>
                            <a href=""><img className='w-[30px] h-[30px]' src={github} alt="" /></a>
                            <a href=""><img className='w-[30px] h-[30px]' src={linkedin} alt="" /></a>
                            <a href=""><img className='w-[30px] h-[30px]' src={faccebook} alt="" /></a>
                            <a href="cv.pdf" download={"resume.pdf"}><img className='w-[30px] h-[30px]' src={file} alt="" /></a>
                        </div>
                    </nav>
                </div>
            </footer>
        </>
    );
};

export default Footer;