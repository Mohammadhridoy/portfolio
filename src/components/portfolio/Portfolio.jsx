import { Link } from "react-router-dom";




const Portfolio = () => {
    return (
        <div className=" px-3 md:px-6 lg:px-12 pt-14 pb-12 bg-[#f1ece7]  ">
            <div className=" pb-6 lg:pb-9">
             <h1 className="text-3xl underline font-bold text-center py-3 "><a href="/services">Portfolio</a> </h1> 
             <h4 className="text-center text-[#f16a1b] text-[16px]">Discover My  <span className="text-black font-[Caveat] text-xl">Latest Works</span></h4>
            </div>
            <div className="md:grid grid-cols-2 gap-10 ">
                <a href="#" className="group relative block overflow-hidden mb-6 md:mb-0">
                <button
                    className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
                >
                    <span className="sr-only">Wishlist</span>

                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                    </svg>
                </button>

                <img
                    src='https://i.ibb.co/drzpxFZ/portfolio-img1.png'
                    alt=""
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                />

                <div className="relative border border-gray-100 bg-white p-6">
                    <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">restaurant website </span>

                    <h3 className="mt-4 text-lg font-medium text-gray-900">live link: <Link to='https://thumbs-up-diner.web.app'>click</Link>  </h3>

                </div>
                </a>
                {/* cardno-2 */}
                <a href="#" className="group relative block overflow-hidden">
                <button
                    className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
                >
                    <span className="sr-only">Wishlist</span>

                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                    </svg>
                </button>

                <img
                    src='https://i.ibb.co/wNdYQc3/portfolio-img2.png'
                    alt=""
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                />

                <div className="relative border border-gray-100 bg-white p-6">
                    <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">Parcel Management App</span>

                    <h3 className="mt-4 text-lg font-medium text-gray-900">live link: <Link to='https://shipsy-520a6.web.app'>click</Link>  </h3>

                </div>
                </a>

            </div>
           
           

            
        </div>
    );
};

export default Portfolio;