import shape1 from '../../assets/shape-1.png'



const Contact = () => {
    return (
        <div className=" px-3 md:px-6 lg:px-12 pt-32 pb-0 bg-[#f1ece7] relative  ">
        <div className=" pb-6 lg:pb-9">
         <h1 className="text-3xl underline font-bold text-center py-3 ">Contact Me </h1> 
         <h4 className="text-center text-[#f16a1b] text-[16px]">LETS <span className="text-black font-[Caveat] text-xl">Talk About Ideas </span></h4>
        </div>
    
        <div>
            {/*info  */}

            {/* contact info */}

<section className="">
  <div className="lg:  md:ml-9 lg:ml-56 ">


    <main
      className=" px-8 py-2 sm:px-12  lg:px-16 lg:pb-16  "
    >
      <div className="max-w-xl lg:max-w-3xl">


        <form action="#" className="mt-8 grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="FirstName" className="uppercase block text-sm pl-5 font-medium text-gray-700">
              your full Name
            </label>

            <input
              type="text"
              id="FirstName"
              name="first_name"
              className="mt-1 p-3 w-full rounded-3xl border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="LastName" className=" uppercase pl-5 block text-sm font-medium text-gray-700">
              your email address
            </label>

            <input
              type="text"
              id="LastName"
              name="last_name"
              className="mt-1  p-3 w-full rounded-3xl border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6">
            <label htmlFor="Email" className="block text-sm font-medium text-gray-700  uppercase pl-5"> your subject </label>

            <input
              type="email"
              id="Email"
              name="email"
              className="mt-1  p-3 w-full rounded-3xl border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

        
          <div className="col-span-6">
            <label htmlFor="Email" className="block text-sm font-medium text-gray-700  uppercase pl-5"> your message </label>


            <div>

            <textarea
                id="OrderNotes"
                className="mt-2 p-6 w-full rounded-xl border-gray-200 align-top shadow-sm sm:text-sm"
                rows="4"
                placeholder="Your Message "
            ></textarea>
            </div>


          </div>




     



        </form>
        <div>
            
        <button className="btn uppercase  btn-outline btn-error rounded-full hover:text-white mt-7 "> Send message</button>
        </div>
        <div>
            <img className='w-40 md:w-48 lg:w-52 absolute -top-8 -left-28 ' src={shape1} alt="" />
        </div>
      </div>
    </main>
  </div>
</section>
        </div>
       

        
    </div>
    );
};

export default Contact;