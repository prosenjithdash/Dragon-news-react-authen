import { Link, NavLink } from "react-router-dom";
import userIMG from '../../../../src/assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
const Navbar = () => {


    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/career'>Career</NavLink></li>

    </>
    const { user, logOut } = useContext(AuthContext);

    // handleSignOut
    const handleSignOut = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
                alert('Successfully LogOut')
            })
            .catch(() => {
                // An error happened.
                alert('Wrong LogOut, Try again...')

            });
    }

    return (
        <div className="navbar bg-base-100 mt-[21px] mb-[76px]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
               
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end ">

                <img className="w-[41px] h-[41px] mr-4" src={userIMG} alt="" />
                {/* {
                    user.photoURL ? <img className="w-[41px] h-[41px] mr-4" src={user.photoURL} alt="" /> : <img className="w-[41px] h-[41px] mr-4" src={userIMG} alt="" />
               }
                */}
                {
                    user ? <Link to='' onClick={handleSignOut} className=" bg-[#403F3F] rounded-lg text-white px-8 py-2 font-bold">Logout</Link> : <Link to='/logIn' className=" bg-[#403F3F] rounded-lg text-white px-8 py-2 font-bold">Login</Link>
                }
                
            </div>
        </div>
    );
};

export default Navbar;