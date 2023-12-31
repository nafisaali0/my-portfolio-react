const NavBar = () => {

    const divStyle = {
        // background: 'hsl(0 0% 100% / 0.1)',
        background: ' hsl(0 0% 60% / 0.3)',
        backdropFilter: 'blur(1rem)',
        // Add other CSS properties here as needed
    };

    return (
        <div className=" h-[5rem] drop-shadow-md bg-white">
            {/* <div className="container mx-auto"> */}
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="dropdown-content -left-2 -top-3 z-[1] p-5 rounded-xl w-[55vw] h-[100vh] flex flex-col justify-center items-center gap-10 text-2xl font-bold" style={divStyle}>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#skill">Skills</a></li>
                                <li><a href="#projects">Projects</a></li>
                                <li><a href="#about" >About</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                        <a className="btn border-0 bg-transparent normal-case text-xl font-bold hidden lg:flex">Nafisa Ali</a>
                    </div>
                    {/* <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#skill">Skills</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#about" >About</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div> */}
                    <div className="navbar-end">
                        <a className="btn border-0 bg-transparent normal-case text-xl font-bold flex lg:hidden">Nafisa Ali</a>
                        <ul className="menu menu-horizontal px-1 hidden lg:flex text-xl font-semibold">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#skill">Skills</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#about" >About</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            {/* </div> */}
        </div>
    );
};

export default NavBar;