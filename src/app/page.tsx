import Image from 'next/image'
import { Inter } from 'next/font/google'

import {TiTickOutline} from 'react-icons/Ti';



export default function Home() {
  return (
    <div className="bg-[url('/769.jpg')] bg-no-repeat bg-cover mt-15 mx-auto ">
    <div className=" text-center pt-6 py-10">
      <h3 className="text-white  pr-20 font-semibold pt-10">Hello I'm </h3>
      <h1 className="text-white  pr-20 font-bold text-4xl">Adil</h1>
      <h3 className="text-white  pr-20 font-semibold">Mern Stack Developer</h3>

      <div className="flex text-center pr-20 justify-center mt-10 gap-8 ">
        <button className=" outline outline-offset-2 outline-teal-500 rounded-lg text-lg p-2 font-medium text-teal-500">Download C.V</button>

        <button className=" rounded-lg   text-lg p-3 bg-teal-500">Let's Tallk</button>
      </div>
    </div>
    {/* image */}
    <div className=" mx-auto mt-7 items-center pl-[500px]">
       <img src="/male.jpg" alt="logo" width={300} height={600} className=" w-lg h-95  object-contain rounded-t-full " />
    </div>
    {/* end */}
    

    {/* about */}
    

   

      <h3 className="text-teal-500  font-semibold pt-20 text-center">Get to now</h3>
      <h2 className="text-teal-400 font-autograph text-6xl text-center">About me</h2>
      <div className=" pl-20">

    
      <div className="flex gap-1  md:flex-row flex-col  pt-10  ">
        <Image src="/male.jpg" alt='logo' width={500}  height={500} className="md:pl-40 p-5 "></Image>
        <div className="  md:pl-40 md:pr-10 md:w-1/2 ">
        
        <p className="pt-5 text-lg p-2 text-teal-500  ">I look forward to bringing my strong creative, technical, and analytical skills to Full-Stack Development with developing and delivering user-centric applications and solutions. Throughout my career, I have been recognized as a professional who is focused on finding solutions and is capable of designing and developing cutting-edge applications using cutting-edge technologies.
         </p>

         <div className="pl-3 pt-5">
         <button className=" rounded-lg    text-lg p-3 bg-teal-500">Let's Tallk</button>
         </div>

         </div>
    </div>

{/* experience */}
  <h3 className="text-teal-500  font-semibold pt-20 text-center">whats skills Have</h3>
  <h2 className="text-teal-400 font-autograph text-6xl text-center">My Experience</h2>

  {/* left side */}
  <div className=" pt-10 flex  md:flex-col flex-row ">

  
    <div className="flex gap-10 pl-40 w-2/4">


    <span className=" flex  border rounded-lg gap-20 p-10 bg-teal-500 hover:bg-hidden ">
    <div>
    <p className="flex text-white font-medium pl-4 pt-5"><TiTickOutline size={23}/>HTML</p>
    <p className="flex text-white font-medium pl-4 pt-5"><TiTickOutline size={23}/>CSS</p>
    <p className="flex text-white font-medium  pl-4 pt-5"><TiTickOutline size={23}/>Javascript</p>
    <p className="flex text-white font-medium  pl-4 pt-5"><TiTickOutline size={23}/>Tailwind</p>
    </div>

    <div>
    <p className="flex text-white font-medium pr-15 pt-5"><TiTickOutline size={23}/>Next.js</p>
    <p className="flex text-white font-medium pl-15 pt-5"><TiTickOutline size={23}/>Bootstrap</p>
    <p className="flex text-white font-medium  pl-15 pt-5"><TiTickOutline size={23}/>React</p>
    <p className="flex text-white font-medium pl-15  pt-5"><TiTickOutline size={23}/>SQl</p>
    </div>
    </span>

{/* righr side */}


    <div className="flex gap-10 pl-40 w-2/4 ">

       
    <span className=" flex  border rounded-lg gap-20 p-10 bg-teal-500 hover:bg-hidden ">
      
    <div>
    <p className="flex text-white font-medium pl-4 pt-5"><TiTickOutline size={23}/>MongoDB</p>
    <p className="flex text-white font-medium pl-4 pt-5"><TiTickOutline size={23}/>Nodejs</p>
    <p className="flex text-white font-medium  pl-4 pt-5"><TiTickOutline size={23}/>Express</p>
    <p className="flex text-white font-medium  pl-4 pt-5"><TiTickOutline size={23}/>Redux</p>
    </div>

     <div>
   
    <p className="flex text-white font-medium pl-15 pt-5"><TiTickOutline size={23}/>Bootstrap</p>
    <p className="flex text-white font-medium  pl-15 pt-5"><TiTickOutline size={23}/>React</p>
   
    </div>
    </span>



     

    
 </div>

</div>
</div>
  </div>
  {/* portfolio */}

  <h3 className="text-teal-500  font-semibold pt-20 text-center">My Recent Work</h3>
  <h2 className="text-teal-400   font-autograph text-6xl text-center">Portfolio</h2>
 
  <div
      className=" flex items-center max-w-full mx-auto leading-8 mb-5 " 
      id="portfolio"
    >
      <div className="text-gray-500 px-10 mt-32 mx-auto">
       
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-24 mx-auto w-full  ">
          {/* card 1 */}
          <div className="shadow-md shadow-gray-600  h-60 hover:scale-105 duration-75 ">
            <div>
              <img
                src={"https://my-resume-ows-ali.vercel.app/images/portfolio/4.jpeg"}
                className="w-60 h-40 rounded-t-md "
              />
            </div>
            <div className="flex justify-between px-5 text-white">
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://github.com/Adilsheikh890" target={"_blank"}>
                  Demo
                </a>
              </button>
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://github.com/Adilsheikh890" target={"_blank"}>
                  Code
                </a>
              </button>
            </div>
          </div>
          {/* card end */}

          {/* card 2 */}
          <div className="shadow-md shadow-gray-600 h-60 hover:scale-105 duration-75 ">
            <div>
              <img
                src={"https://my-resume-ows-ali.vercel.app/images/portfolio/5.jpeg"}
                className="w-60 h-40 rounded-t-md "
              />
            </div>
            <div className="flex justify-between px-5 text-white">
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://github.com/Adilsheikh890" target={"_blank"}>
                  Demo
                </a>
              </button>
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://github.com/Adilsheikh890" target={"_blank"}>
                  Code
                </a>
              </button>
            </div>
          </div>
          {/* card end */}

          {/* card 3 */}
          <div className="shadow-md shadow-gray-600 h-60 hover:scale-105 duration-75 ">
            <div>
              <img
                src={"https://my-resume-ows-ali.vercel.app/images/portfolio/6.avif"}
                className="w-60 h-40 rounded-t-md"
              />
            </div>
            <div className="flex justify-between px-5 text-white">
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://github.com/Adilsheikh890" target={"_blank"}>
                  Demo
                </a>
              </button>
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://github.com/Adilsheikh890" target={"_blank"}>
                  Code
                </a>
              </button>
            </div>
          </div>
          {/* card end */}

          {/* card 4 */}
          <div className="shadow-md shadow-gray-600 h-60 hover:scale-105 duration-75 ">
            <div>
              <img
                src={"https://my-resume-ows-ali.vercel.app/images/portfolio/1.jpeg"}
                className="w-60 h-40 rounded-t-md"
              />
            </div>
            <div className="flex justify-between px-5 text-white">
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://google.com" target={"_blank"}>
                  Demo
                </a>
              </button>
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://google.com" target={"_blank"}>
                  Code
                </a>
              </button>
            </div>
          </div>
          {/* card end */}

          {/* card 5 */}
          <div className="shadow-md shadow-gray-600 h-60 hover:scale-105 duration-75 ">
            <div>
              <img
                src={"https://my-resume-ows-ali.vercel.app/images/portfolio/2.jpeg"}
                className="w-60 h-40 rounded-t-md"
              />
            </div>
            <div className="flex justify-between px-5 text-white">
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://google.com" target={"_blank"}>
                  Demo
                </a>
              </button>
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://google.com" target={"_blank"}>
                  Code
                </a>
              </button>
            </div>
          </div>
          {/* card end */}
          {/* card 6 */}
          <div className="shadow-md shadow-gray-600 h-60 hover:scale-105 duration-75 ">
            <div>
              <img
                src={"https://my-resume-ows-ali.vercel.app/images/portfolio/3.webp"}
                className="w-60 h-40 rounded-t-md"
              />
            </div>
            <div className="flex justify-between px-5 text-white">
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://google.com" target={"_blank"}>
                  Demo
                </a>
              </button>
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://google.com" target={"_blank"}>
                  Code
                </a>
              </button>
            </div>
          </div>
          {/* card end */}
        </div>
      </div>
    </div>



  

  
  
  



  {/* end */}
  {/* contact */}
  <h3 className="text-teal-500  font-semibold pt-20 text-center">Get In Touch</h3>
  <h2 className="text-teal-400 font-autograph text-6xl text-center">Contact</h2>
  <form action="https://formspree.io/f/mbjeaqpn" method="POST" className="pl-10 p-10 text-center pt-5">
            <div>
              <input
                placeholder="Your Name"
                type="text"
                required
                name="name"
                className="p-2 w-80 bg-transparent border-2 rounded-md focus:outline-none text-white"
              />
            </div>
            <div className="my-5">
              <input
                required
                className="p-2 w-80 bg-transparent border-2 rounded-md focus:outline-none text-white"
                placeholder="Your E-Mail"
                type="email"
                name="email"
              />
            </div>
            <div>
              <textarea
                rows={8}
                name="meraMessage"
                required
                className="p-2 w-80 bg-transparent border-2 rounded-md focus:outline-none text-white"
                placeholder="Your Message Here..."
              />
            </div>
            <button
              type="submit"
              className="mx-auto block px-5   rounded-md  bg-gradient-to-b from-gray-300 text-black to-gray-600"
            >
              Submit
            </button>
          </form>
  
  {/* end contact */}
</div>


  )
}

// https://bisma-portfolio.firebaseapp.com/#

