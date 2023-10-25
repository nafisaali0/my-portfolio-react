import bg from '../../assets/wavedown.svg'
const Contact = () => {
    return (
            <div className='bg-[#f2f2f2]' style={{ backgroundImage: `url(${bg})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className='container mx-auto my-20 p-10'>
                <h2 className="font-bold text-3xl text-[#174984] my-8">Contact</h2>
                <form className='flex justify-center items-center'>
                    <div className='flex flex-col w-8/12 '>
                        <input type="text" placeholder="Name" className="input input-bordered  w-full" />
                        <input type="text" placeholder="Email" className="input input-bordered w-full my-5" />
                        <textarea className="w-full h-[100px] border-2 border-[#dadada] rounded-lg my-5 p-2" placeholder="Message"></textarea>
                        <button type='submit' className="btn btn-block bg-[#174984] text-white">block</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;