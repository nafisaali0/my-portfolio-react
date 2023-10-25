import github from '../../assets/github1.svg'
import linkedin from '../../assets/linkedin1.svg'
import faccebook from '../../assets/facebook1.svg'

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
                        </div>
                    </nav>
                </div>
            </footer>
        </>
    );
};

export default Footer;