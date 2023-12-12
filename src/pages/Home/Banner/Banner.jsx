import react from '../../../assets/react.png'
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiFirebase } from "react-icons/si";
import image1 from '../../../assets/hridoy.png'
import shape1 from '../../../assets/shape-1.png'
import shape2 from '../../../assets/shape-2.png'
import resume from '../../../assets/mohammad-cv.pdf'



const Banner = () => {
   

    return (
        <div className=" px-3 md:px-6 lg:px-12  md:py-2 bg-[#f1eae2] .mask-target">
            <div className="hero lg:min-h-[650px] z-0 ">
            <div className="hero-content flex-col lg:flex-row-reverse relative">
                {/* banner right */}
                <div className=" bg-black rounded-full md:h-[450px]  md:w-[450px] ">
                <img src={image1} className="max-w-sm -mt-[74px] pr-[70px] md:pr-0 pb-[7px] md:pb-0 lg:mr-28 z-10" />
                </div>
                {/* images shape */}
                <div className=' absolute top-0 -right-12 hidden lg:flex '>
                    <img className='w-52 ' src={shape1} alt="" />
                </div>
                <div className='absolute bottom-0 -right-12 z-0  hidden lg:flex'>
                    <img className='w-32' src={shape2} alt="" />
                </div>
                <div className='absolute bottom-0 right-96 z-0  hidden lg:flex'>
                    <img className='w-32' src={shape2} alt="" />
                </div>
                
                {/* banner left*/}
                <div className="lg:mr-28 ">
                <h4 className="uppercase text-[16px] font-semibold pb-2">hello, <span className="text-[#f16a1b]">my name is</span> </h4>
                <h1 className="text-5xl font-bold uppercase "><span className="text-[#f16a1b]">Mohammad</span> hridoy</h1>
                <h4 className="uppercase text-[16px] font-semibold pt-3 ">I am <span className="text-xl font-family: 'Caveat', cursive;">Web Developer</span> </h4>
                <p className="py-4 lg:w-2/4">From Bangladesh, Dhaka. Web development is my passion. Lets build something amazing together! </p>
                <div className="py-2 flex items-center gap-6">
                    <h1 className="font-bold">tceh |</h1>
                    <div className='text-3xl flex items-center gap-2'>
                        <div className="">
                            <img src={react} alt="" />
                        </div>
                        {/* second */}
                        <div className="">
                             <IoLogoJavascript className='text-yellow-400' />
                        </div>
                        <div>
                        <SiTailwindcss className='text-[#38bdf8]' />
                        </div>
                        <div>
                        <FaNodeJs className='text-[#5aaa46]' />
                        </div>
                        <div>
                         <SiFirebase className='text-[#ffcb2d]'></SiFirebase>
                        </div>
                        <div>
                         <DiMongodb className='text-[#5aaa46]'></DiMongodb>
                        </div>
                    </div>
                </div >
                <button className="btn uppercase  btn-outline btn-error rounded-full hover:text-white mt-7 "> <a href={resume} download=''>Download cv</a> </button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;