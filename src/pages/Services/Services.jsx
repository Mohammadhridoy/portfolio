

const Services = () => {
    return (
        <div className=" px-3 md:px-6 lg:px-12 pt-14 pb-12 bg-[#f1ece7]  ">
            <div className=" pb-6 lg:pb-9">
             <h1 className="text-3xl underline font-bold text-center py-3 "><a href="/services">What I do</a> </h1> 
             <h4 className="text-center text-[#f16a1b] text-[16px]">My <span className="text-black font-[Caveat] text-xl">Services</span></h4>
            </div>
            {/* card section  */}
            <div className=" ml-3 md:ml-0  md:flex justify-evenly items-center md:gap-4 lg:gap-0">
                {/* card no 1 */}
                <div className="card w-96 md:w-60 lg:w-96  mb-6 md:mb-0 bg-[#f1ece7] shadow-md">
                <div className="card-body ">
                <h4 className="text-xs uppercase pb-10 "> Frontend</h4>
                    <h2 className="card-title ">Frontend website creation</h2>
                      <p className="pb-4">I can create frontend websites for your business, portfolio, company, e-commerce store,
                         blog etc. I provide unique, clean & awesome graphical design interface.
                        </p>
                   
                </div>
                </div>
                {/* card no 2 */}
                <div className="card w-96  md:w-60 lg:w-96  mb-6 md:mb-0 bg-[#f1ece7] shadow-md">
                <div className="card-body ">
                <h4 className="text-xs uppercase pb-10 "> Backend</h4>
                    <h2 className="card-title ">Backend website creation</h2>
                      <p className="pb-4">I can create backend websites for your business, portfolio, company, e-commerce store,
                         blog etc. I provide unique, clean & awesome graphical design interface.
                        </p>
                   
                </div>
                </div>
                {/* card no 3 */}
                <div className="card w-96  md:w-60 lg:w-96  bg-[#f1ece7] shadow-md">
                <div className="card-body ">
                <h4 className="text-xs uppercase pb-10 "> mern stack </h4>
                    <h2 className="card-title ">Mern Stack website creation</h2>
                      <p className="pb-4">I can create mern stack websites for your business, portfolio, company, e-commerce store,
                         blog etc. I provide unique, clean & awesome graphical design interface.
                        </p>
                   
                </div>
                </div>
            </div>
           

            
        </div>
    );
};

export default Services;