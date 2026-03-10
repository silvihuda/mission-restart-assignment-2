import React from 'react';

const Navbar = () => {
    return (
      <div className=' bg-slate-50 mb-6'>
          <div className="navbar max-w-[1280px] mx-auto ">
            <div className="flex-1">
                <a className=" text-2xl font-bold">CS — Ticket System</a>
            </div>
            <div className="flex flex-wrap items-center lg:gap-4 gap-2">
                <ul className="menu menu-horizontal px-1 ">
                    <li><a>Home</a></li>
                    <li><a>FAQ</a></li>
                    <li><a>Changelog</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Download</a></li>
                    <li><a>Contact</a></li>
                    <button className='btn ml-4 lg:px-4 lg:py-3 lg:text-xl bg-gradient-to-r from-[#422AD5] to-white  '>+ <span>New Ticket</span></button>
                </ul>
            </div>
        </div>
      </div>
    );
};

export default Navbar;