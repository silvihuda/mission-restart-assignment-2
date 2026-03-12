import React from 'react';

const Footer = () => {
    return (
        <div className='lg:mt-14 mt-6 bg-neutral'>
            <footer className="footer sm:footer-horizontal text-neutral-content p-10">
               <nav>
                    <h6 className=" text-white text-xl font-bold">CS — Ticket System</h6>
                    <p className='lg:max-w-md text-gray-400 space-y-2'>CS-Ticket System is a customer support platform designed to help teams manage, track, and resolve customer issues efficiently. It provides an organized ticketing system that ensures every request is handled quickly and effectively, improving customer satisfaction and support workflow.</p>
                </nav>
                <nav>
                    <h6 className="text-white text-xl font-bold">Company</h6>
                    <a className="link link-hover text-gray-400">About Us</a>
                    <a className="link link-hover text-gray-400">Our Mission</a>
                    <a className="link link-hover text-gray-400">Contact</a>
                </nav>
                <nav>
                    <h6 className="text-white text-xl font-bold">Services</h6>
                    <a className="link link-hover text-gray-400">Products & Services</a>
                    <a className="link link-hover text-gray-400">Customer Stories</a>
                    <a className="link link-hover text-gray-400">Download Apps</a>
                </nav>
                <nav>
                    <h6 className="text-white text-xl font-bold">Information</h6>
                    <a className="link link-hover text-gray-400">Privacy policy</a>
                    <a className="link link-hover text-gray-400">Terms of conditions</a>
                    <a className="link link-hover text-gray-400">Join Us</a>
                </nav>
                <nav>
                    <h6 className="text-white text-xl font-bold">Social Links</h6>
                    <a className="link link-hover text-gray-400"><span className='bg-white w-5 h-5 rounded-full inline-flex justify-center items-center mr-2'><i className="fa-brands fa-x-twitter text-black"></i></span>@CS — Ticket System</a>
                    <a className="link link-hover text-gray-400"><span className='bg-white w-5 h-5 rounded-full inline-flex justify-center items-center mr-2'><i className="fa-brands fa-linkedin-in text-black"></i></span>@CS — Ticket System</a>
                    <a className="link link-hover text-gray-400"><span className='bg-white w-5 h-5 rounded-full inline-flex justify-center items-center mr-2'><i className="fa-brands fa-facebook-f text-black"></i></span>@CS — Ticket System</a>
                    <a className="link link-hover text-gray-400 "><span className='bg-white w-5 h-5 rounded-full inline-flex justify-center items-center mr-2'><i className="fa-regular fa-envelope text-black"></i></span>support@cst.com</a>
                </nav>

            </footer>
                <hr className='lg:mt-14 mt-8 lg:mb-8 mb-2 max-w-[1480px] mx-auto' />
              
                <p className='text-gray-400 text-center lg:pb-4 pb-2'>© 2025 CS — Ticket System. All rights reserved.</p>
               
        </div>
    );
};

export default Footer;