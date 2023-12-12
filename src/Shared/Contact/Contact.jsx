import { useRef } from 'react';
import bg from '../../assets/background/wavedown.svg'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_slqwoa5', 'template_b0bsejm', form.current, 'GMwd2_s7nL2f8AfHQ')
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Thanks to contact with me",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }, (error) => {
                console.log(error.text);
            });

    };
    return (
        <div className='bg-[#f2f2f2]' style={{ backgroundImage: `url(${bg})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className='container mx-auto my-20 p-10'>
                <h2 className="font-bold text-3xl text-[#174984] my-8">Contact</h2>
                <form ref={form} onSubmit={sendEmail} className='flex justify-center items-center'>
                    <div className='flex flex-col w-8/12 '>
                        <input type="text" placeholder="Name" name="user_name" className="input input-bordered  w-full" />
                        <input type="text" placeholder="Email" name="user_email" className="input input-bordered w-full my-5" />
                        <textarea placeholder="Message" name="message" className="w-full h-[100px] border-2 border-[#dadada] rounded-lg my-5 p-2"></textarea>
                        <button type='submit' value="Send" className="btn btn-block bg-[#174984] text-white">Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;