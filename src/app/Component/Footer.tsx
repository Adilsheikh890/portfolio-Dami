import React from 'react'
import {FaFacebookSquare} from 'react-icons/Fa';
import {BsLinkedin} from 'react-icons/Bs';
import {SiMessenger} from 'react-icons/Si';
import {IoLogoYoutube} from 'react-icons/Io';


export default function Footer() {
  return (
    <div className="bg-teal-600 h-100 ">
        <h1 className=" pt-10  font-autograph text-4xl mb-5 text-center ">Muhammad Adil</h1>
      <div>
        <ol className="flex mb-5 justify-center gap-8 text-center text-white font-semibold ">
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ol>
      </div>

      <div className="flex mt=20 justify-center  gap-10 pb-10">
      <FaFacebookSquare size={30}  />
      <BsLinkedin size={30}/>
      <SiMessenger size={30}/>
      <IoLogoYoutube size={30} />

      </div>
    </div>
  )
}


// <div className=" pt-10  grid sm:grid-cols-2 md:grid-cols-2 gap-24 mx-auto w-full   ">

  
// <div className="flex gap-10 pl-40 w-2/4 ">


// <span className=" flex border rounded-lg gap-20 p-10 bg-teal-500 hover:bg-hidden ">
// <div>
// <p className="flex text-white font-medium pl-4 pt-5"><TiTickOutline size={23}/>HTML</p>
// <p className="flex text-white font-medium pl-4 pt-5"><TiTickOutline size={23}/>CSS</p>
// <p className="flex text-white font-medium  pl-4 pt-5"><TiTickOutline size={23}/>Javascript</p>
// <p className="flex text-white font-medium  pl-4 pt-5"><TiTickOutline size={23}/>Tailwind</p>
// </div>

// <div>
// <p className="flex text-white font-medium pr-15 pt-5"><TiTickOutline size={23}/>Next.js</p>
// <p className="flex text-white font-medium pl-15 pt-5"><TiTickOutline size={23}/>Bootstrap</p>
// <p className="flex text-white font-medium  pl-15 pt-5"><TiTickOutline size={23}/>React</p>
// <p className="flex text-white font-medium pl-15  pt-5"><TiTickOutline size={23}/>SQl</p>
// </div>
// </span>

// {/* righr side */}


// <div className="flex gap-10 pl-40 w-2/4   ">

   
// <span className=" flex  border rounded-lg gap-20 p-10 bg-teal-500 hover:bg-hidden ">
  
// <div>
// <p className="flex text-white font-medium pl-4 pt-5"><TiTickOutline size={23}/>MongoDB</p>
// <p className="flex text-white font-medium pl-4 pt-5"><TiTickOutline size={23}/>Nodejs</p>
// <p className="flex text-white font-medium  pl-4 pt-5"><TiTickOutline size={23}/>Express</p>
// <p className="flex text-white font-medium  pl-4 pt-5"><TiTickOutline size={23}/>Redux</p>
// </div>

//  <div>

// <p className="flex text-white font-medium pl-15 pt-5"><TiTickOutline size={23}/>Bootstrap</p>
// <p className="flex text-white font-medium  pl-15 pt-5"><TiTickOutline size={23}/>React</p>

// </div>
// </span>



 


// </div>

// </div>
// </div>
// </div>