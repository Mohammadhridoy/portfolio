import { FaGithub } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import {  Link, NavLink  } from "react-router-dom";
import shape2 from '../assets/shape-2.png'
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const Sidebar = () => {



    return (
        <div>
        <div className="drawer z-10">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content" >
                {/* Page content here */}
                <label htmlFor="my-drawer" className=" text-2xl cursor-pointer drawer-button"><AiOutlineMenu  /></label>
            </div> 
            <div className="drawer-side">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay "></label>

                
                <div className=" p-4 pt-36 w-80  min-h-full bg-base-200 text-base-content relative ">
                    <div >
                        <img  className="w-32 absolute -top-0 -left-14 " src={shape2} alt="" />
                    </div>
                <ul >
              
                {/* Sidebar content here */}
                    
                
                 <li  className="px-3 uppercase py-3 font-semibold text-[20px]  hover:text-[#f16a1b] pl-16 ">

                         <NavLink to="/" className=""> Home  </NavLink>
                  </li>  
                  <li  className="px-3 uppercase py-3 font-semibold text-[20px]  hover:text-[#f16a1b] pl-16 ">

                         <NavLink to="" className=""> <a href="/services"></a> services </NavLink>
                  </li>
                  <li  className="px-3 uppercase py-3 font-semibold text-[20px]  hover:text-[#f16a1b] pl-16">

                    <NavLink to="/" className=""> SKILLS </NavLink>
                    </li>
                    <li  className="px-3 uppercase py-3 font-semibold text-[20px]  hover:text-[#f16a1b] pl-16 ">

                    <NavLink to="/" className=""> works </NavLink>
                    </li>    
                    <li  className="px-3 uppercase py-3 font-semibold text-[20px]  hover:text-[#f16a1b] pl-16">

                    <NavLink to="/" className=""> testimonials  </NavLink>
                    </li> 
                    <li  className="px-3 uppercase py-3 font-semibold text-[20px]  hover:text-[#f16a1b] pl-16 ">

                    <NavLink to="/" className="">Blog </NavLink>
                    </li> 
                    <li  className="px-3 uppercase py-3 font-semibold text-[20px]  hover:text-[#f16a1b] pl-16 ">

                        <NavLink to="/" className=""> contact  </NavLink>
                        </li> 
                                    
                </ul>
                {/* social icon  */}
                <div className="pt-2 text-xl pl-16  flex  items-center gap-3">
                 <Link to='https://github.com/Mohammadhridoy/'>  <FaGithub className=" hover:text-[#f16a1b]" /></Link> 
                 <Link to='github'>  <FaLinkedin className="text-[#0077b5] hover:text-[#f16a1b]"></FaLinkedin></Link>
                 <Link to='github'>  <FaFacebookSquare className="text-[#4064ac] hover:text-[#f16a1b]"></FaFacebookSquare></Link>

                </div>

                </div>
                
              
            </div>
            </div>
            
        </div>
    );
};

export default Sidebar;