

const Skills = () => {
    return (
        <div className=" px-3 md:px-6 lg:px-20 pt-14 pb-12 bg-[#f7f4f1]  ">
            <div className=" pb-6 lg:pb-9">
             <h1 className="text-3xl underline font-bold text-center py-3 "><a href="/services">professional skills</a> </h1> 
             <h4 className="text-center text-[#f16a1b] text-[16px]">My <span className="text-black font-[Caveat] text-xl"> Talent</span></h4>
            </div>
            {/* card section  */}
            <div className=" md: grid md:grid-cols-2 lg:grid-cols-3  ml-20 lg:ml-28">
                {/* skill-1 */}
                <div className="w-64">
                    <div className=" flex items-center justify-between">
                    <h1 className="text-xl font-bold py-3 ">Javascript</h1> 
                        <h2>85<span className="text-[#f16a1b]">%</span></h2>
                    </div>
                    <progress className="progress w-60 " value="85" max="100"></progress>

                </div>
                   {/* skill-2*/}
                <div className="w-64">
                    <div className=" flex items-center justify-between">
                    <h1 className="text-xl font-bold py-3 ">React.Js  </h1> 
                        <h2>90<span className="text-[#f16a1b]">%</span></h2>
                    </div>
                    <progress className="progress w-60 " value="90" max="100"></progress>

                </div>
                   {/* skill-3 */}
                   <div className="w-64">
                    <div className=" flex items-center justify-between">
                    <h1 className="text-xl font-bold py-3 ">Node.js </h1> 
                        <h2>80<span className="text-[#f16a1b]">%</span></h2>
                    </div>
                    <progress className="progress w-60 " value="75" max="100"></progress>
                    </div>
                    {/* skill-4 */}
                    <div className="w-64">
                    <div className=" flex items-center justify-between">
                    <h1 className="text-xl font-bold py-3 ">MongoDB </h1> 
                        <h2>70<span className="text-[#f16a1b]">%</span></h2>
                    </div>
                    <progress className="progress w-60 " value="70" max="100"></progress>

                </div>
                    {/* skill-5 */}
                <div className="w-64">
                    <div className=" flex items-center justify-between">
                    <h1 className="text-xl font-bold py-3 ">CSS </h1> 
                        <h2>95<span className="text-[#f16a1b]">%</span></h2>
                    </div>
                    <progress className="progress w-60 " value="95" max="100"></progress>

                </div>
                      {/* skill-5 */}
                      <div className="w-64">
                    <div className=" flex items-center justify-between">
                    <h1 className="text-xl font-bold py-3 ">Tailwind CSS</h1> 
                        <h2>95<span className="text-[#f16a1b]">%</span></h2>
                    </div>
                    <progress className="progress w-60 " value="95" max="100"></progress>

                </div>

            </div>
           
           

            
        </div>
    );
};

export default Skills;