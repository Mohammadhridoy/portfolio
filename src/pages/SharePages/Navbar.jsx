import Sidebar from "../../components/Sidebar";



const Navbar = () => {
    return (
        <div className=" px-3 md:px-6 lg:px-12  md:py-2 shadow-sm">
            <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className=" text-xl lg:text-2xl uppercase font-bold">Mohammad Hridoy</a>
            </div>
            <div className="flex-none">
               {/* drawer */}
                <Sidebar></Sidebar>


            </div>
            </div>
        
        </div>
    );
};

export default Navbar;