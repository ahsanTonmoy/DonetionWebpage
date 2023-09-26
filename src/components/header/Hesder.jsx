import { NavLink } from "react-router-dom";

import Logo from '../Resources/Logo.png'
import './Header.css'

const Hesder = () => {
    const links =<>
    <li><NavLink to={'/'}>home</NavLink></li>
    <li><NavLink to={'/donetion'}>donetion</NavLink></li>
    <li><NavLink to={'/static'}>Statistics</NavLink></li>
    </>
    return (
        <div className='absolute top-0 z-10 w-full md:px-24'>
            <div className="navbar bg-transparent capitalize font-extrabold">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <NavLink to={'/'}><img className="w-full" src={Logo} alt="" /></NavLink>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                
            </div>
        </div>
    );
};

export default Hesder;