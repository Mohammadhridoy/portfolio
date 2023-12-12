import shape1 from '../../assets/shape-1.png'

const Resume = () => {
    return (
        <div>
             <div className=" px-3 md:px-6 lg:px-16 pt-14 pb-12 bg-[#f1ece7]  relative ">
            <div className=" pb-6 lg:pb-9">
             <h1 className="text-3xl underline font-bold text-center py-3 "><a href="/services">Resume</a> </h1> 
             <h4 className="text-center text-[#f16a1b] text-[16px]">My <span className="text-black font-[Caveat] text-xl">Story</span></h4>
            </div>
            <div className=" md:flex items-center justify-between gap-14">
             {/* education */}
              <div className="space-y-4 md:w-2/4">
                <h1>Education</h1>
              <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" checked="checked" /> 
                <div className="collapse-title text-xl font-medium">
                    B.Sc. in Computer Science 
                </div>
                <div className="collapse-content"> 
                    <p>2022-</p>
                </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" /> 
                <div className="collapse-title text-xl font-medium">
                    HSC
                </div>
                <div className="collapse-content"> 
                    <p>2019-2021</p>
                </div>
                </div>


              </div>
              
                {/* experience */}
                    <div className="space-y-4 md:w-2/4">
                        <h1> Experience</h1>
                        <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" /> 
                        <div className="collapse-title text-xl font-medium">
                            Web Development Course
                        </div>
                        <div className="collapse-content"> 
                            <p>2023/6-2023/11</p>
                        </div>
                        </div>
                        {/* experience no 2 */}
                        <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" /> 
                        <div className="collapse-title text-xl font-medium">
                            Projects
                        </div>
                        <div className="collapse-content"> 
                            <p>I have complete many projects</p>
                        </div>
                        </div>

                    </div>
                </div>
                {/* shape image */}
                <div>
                <img className='w-40 md:w-48 lg:w-52 absolute -top-8 -left-28' src={shape1} alt="" />
             </div>
     
             </div>
        

            
        </div>
    );
};

export default Resume;